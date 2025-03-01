import { FC } from 'react';

import Question from '../layouts/Question';
import { quizQuestions } from '../utils/quiz/questions';

export interface QuizProps {}

const Quiz: FC<QuizProps> = () => {
  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <div className="">
        <Question
          question={quizQuestions[0].question}
          options={quizQuestions[0].options}
          onNext={() => null}
        />
      </div>
    </div>
  );
};

export default Quiz;
