import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../components/Button';
import CardOption from '../components/CardOption';
import { QuizQuestion } from '../utils/quiz/questions';

interface QuestionProps {
  question: string;
  options: QuizQuestion['options'];
  // eslint-disable-next-line no-unused-vars
  onNext: (answer: string) => void;
}

const Question: FC<QuestionProps> = ({ question, options, onNext }) => {
  const [activeCard, setActiveCard] = useState<number>();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold">{question}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[34px] mt-4">
        {options.map(({ name, image }, index) => (
          <CardOption
            key={uuidv4()}
            option={name}
            src={image}
            alt={name}
            isActive={activeCard === index}
            onClick={() => setActiveCard(index)}
          />
        ))}
      </div>

      <Button className="mt-[34px]" onClick={() => onNext('')}>
        NEXT {'->'}
      </Button>
    </div>
  );
};

export default Question;
