import { FC, useState } from 'react';

import Question, { AnswerTypes } from '../layouts/Question';
import { quizQuestions } from '../utils/quiz/questions';

export interface QuizProps {}

const Quiz: FC<QuizProps> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswerTypes[]>([]);

  const handleNext = (answer: AnswerTypes) => {
    setAnswers([...answers, answer]);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Finish', answers);
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  console.log(answers);

  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <div className="">
        <Question {...currentQuestion} onNext={handleNext} />
      </div>
    </div>
  );
};

export default Quiz;
