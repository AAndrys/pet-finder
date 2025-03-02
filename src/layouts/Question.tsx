import { FC, useState } from 'react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import Button from '../components/Button';
import CardOption from '../components/CardOption';
import Checkbox from '../components/Checkbox';
import Listbox from '../components/ListBox';
import { Option, QuizQuestion } from '../utils/quiz/questions';

interface QuestionProps extends QuizQuestion {
  // eslint-disable-next-line no-unused-vars
  onNext: (answer: AnswerTypes) => void;
}

export interface AnswerTypes {
  question: string;
  selectedAnswers: any[];
}

const Question: FC<QuestionProps> = ({
  question,
  options,
  type,
  isMultipleCheck,
  onNext,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const toggleOption = (option: Option) => {
    setSelectedOptions((prev) =>
      isMultipleCheck
        ? prev.some((o) => o.name === option.name)
          ? prev.filter((o) => o.name !== option.name)
          : [...prev, option]
        : [option],
    );
  };

  const handleClickNext = () => {
    if (selectedOptions.length === 0) return;

    onNext({ question, selectedAnswers: selectedOptions.map((o) => o.name) });

    setSelectedOptions([]);
  };

  const renderOptions = () => {
    switch (type) {
      case 'card':
        return (
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-[34px] mt-4">
            {options.map((option) => (
              <CardOption
                key={uuidv4()}
                option={option.name}
                src={option.image}
                alt={option.name}
                isActive={selectedOptions.some((o) => o.name === option.name)}
                onClick={() => toggleOption(option)}
              />
            ))}
          </div>
        );
      case 'checkbox':
        return (
          <div
            className={clsx(
              'w-full grid gap-[12px] mt-4',
              options.length >= 6 && 'grid-cols-2',
            )}
          >
            {options.map((option) => (
              <Checkbox
                key={uuidv4()}
                option={option.name}
                isActive={selectedOptions.some((o) => o.name === option.name)}
                onClick={() => toggleOption(option)}
              />
            ))}
          </div>
        );
      case 'listbox':
        return (
          <Listbox
            options={options}
            onClick={(name) => toggleOption({ name })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold">{question}</h2>
      {renderOptions()}
      <Button
        className="mt-[34px] m-auto"
        onClick={handleClickNext}
        disabled={!selectedOptions}
      >
        NEXT {'->'}
      </Button>
    </div>
  );
};

export default Question;
