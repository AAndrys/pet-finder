import { FC } from 'react';
import { useNavigate } from 'react-router';

import ImagePlaceholder from '../assets/pngs/image-placeholder.png';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import { useFetch } from '../hooks/useFetch';
import { routes } from '../routes';
import { useQuizContext } from '../store';
import { queryKeys } from '../utils/api/keys';
import { Animal, AnimalsResponse } from '../utils/types';

const Match: FC = () => {
  const { answers } = useQuizContext();
  let navigate = useNavigate();

  const petType = answers[0]?.selectedAnswers[0];
  const breeds = answers[1]?.selectedAnswers;
  const size = answers[2]?.selectedAnswers[0];
  const gender = answers[3]?.selectedAnswers[0];
  const age = answers[4]?.selectedAnswers[0];
  const goodWithChildren =
    answers[6]?.selectedAnswers[0] === 'Yes' ? true : false;
  const goodWithDogs = answers[7]?.selectedAnswers[0] === 'Yes' ? true : false;
  const goodWithCats = answers[8]?.selectedAnswers[0] === 'Yes' ? true : false;
  const houseTrained = answers[9]?.selectedAnswers[0] === 'Yes' ? true : false;
  const isShelterAdopt =
    answers[10]?.selectedAnswers[0] === 'right-now' ? 'adoptable' : 'adopted';

  const buildQuery = () => {
    let query = '';

    if (petType) query += `type=${petType}&`;
    if (breeds && breeds.length > 0) query += `breed=${breeds.join(',')}&`;
    if (size) query += `size=${size.toLowerCase()}&`;
    if (gender) query += `gender=${gender.toLowerCase()}&`;
    if (age) query += `age=${age.toLowerCase()}&`;
    if (goodWithChildren) query += `good_with_children=true&`;
    if (goodWithDogs) query += `good_with_dogs=true&`;
    if (goodWithCats) query += `good_with_cats=true&`;
    if (houseTrained) query += `house_trained=true&`;
    if (isShelterAdopt) query += `status=${isShelterAdopt}`;

    return query;
  };

  const query = buildQuery();

  const { data, isLoading } = useFetch<AnimalsResponse>(
    [queryKeys.match, query],
    `animals?${query}`,
    true,
  );

  return (
    <div className="flex flex-1 items-center justify-center p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (data || { animals: [] }).animals.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {(data || { animals: [] }).animals.map((animal: Animal) => (
            <div
              key={animal.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={animal.primary_photo_cropped?.small || ImagePlaceholder}
                alt={animal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{animal.name}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {animal.description}
                </p>
              </div>
            </div>
          ))}
          <Button className="m-auto mt-4" onClick={() => navigate(routes.quiz)}>
            Back
          </Button>
        </div>
      ) : (
        <div className="flex flex-col">
          <p>No pets found matching your criteria.</p>
          <Button className="m-auto mt-4" onClick={() => navigate(routes.quiz)}>
            Try again! :(
          </Button>
        </div>
      )}
    </div>
  );
};

export default Match;
