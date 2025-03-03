import { FC } from 'react';
import { useNavigate } from 'react-router';

import ImagePlaceholder from '../assets/pngs/image-placeholder.png';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import { useFetch } from '../hooks/useFetch';
import { routes } from '../routes';
import { queryKeys } from '../utils/api/keys';
import { Animal, AnimalsResponse } from '../utils/types';

export interface PetsProps {}

const Pets: FC<PetsProps> = () => {
  let navigate = useNavigate();

  const { data, isLoading } = useFetch<AnimalsResponse>(
    [queryKeys.match],
    `animals`,
    true,
  );

  return (
    <div className="flex flex-1 items-center justify-center p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (data || { animals: [] }).animals.length > 0 ? (
        <div className="flex flex-col">
          <Button
            className="w-min ml-auto my-4"
            onClick={() => navigate(routes.home)}
          >
            Back
          </Button>
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
          </div>
        </div>
      ) : (
        <p>No pets found.</p>
      )}
    </div>
  );
};

export default Pets;
