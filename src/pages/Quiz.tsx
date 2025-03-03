import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import LoadingSpinner from '../components/LoadingSpinner';
import { useFetch } from '../hooks/useFetch';
import Question, { AnswerTypes } from '../layouts/Question';
import { useQuizContext } from '../store';
import { formatCategoryName } from '../utils';
import { queryKeys } from '../utils/api/keys';
import { quizQuestions } from '../utils/quiz/questions';
import { AnimalBreedsResponse } from '../utils/types';

export interface QuizProps {}

const Quiz: FC<QuizProps> = () => {
  const { answers, addAnswer, resetQuiz } = useQuizContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  let navigate = useNavigate();

  const isFirstAnswer = !!(
    answers.length > 0 && answers[0]?.selectedAnswers[0]
  );
  const firstAnswer = formatCategoryName(answers[0]?.selectedAnswers[0]);

  const { data: breedsData, isLoading } = useFetch<AnimalBreedsResponse>(
    [queryKeys.animalBreeds, firstAnswer],
    `types/${firstAnswer}/breeds`,
    isFirstAnswer,
  );

  useEffect(() => {
    resetQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNext = (answer: AnswerTypes) => {
    addAnswer(answer);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/quiz/match');
    }
  };

  const currentQuestion = {
    ...quizQuestions[currentQuestionIndex],
    options:
      currentQuestionIndex === 1 && breedsData
        ? breedsData.breeds.map((breed) => ({
            name: breed.name,
            value: breed.name,
          }))
        : quizQuestions[currentQuestionIndex].options,
  };

  return (
    <div className="flex flex-1 items-center justify-center p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Question {...currentQuestion} onNext={handleNext} />
      )}
    </div>
  );
};

export default Quiz;
