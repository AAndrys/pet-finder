import { createContext, FC, ReactNode, use, useState } from 'react';

type AnswerTypes = {
  selectedAnswers: string[];
};

type QuizContextType = {
  answers: AnswerTypes[];
  // eslint-disable-next-line no-unused-vars
  addAnswer: (answer: AnswerTypes) => void;
  resetQuiz: () => void;
};

const QuizContext = createContext<QuizContextType | null>(null);

const useQuizContext = () => {
  const context = use(QuizContext);
  if (!context) {
    throw new Error('useQuizContext must be used within a QuizProvider');
  }
  return context;
};

const QuizProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<AnswerTypes[]>([]);

  const addAnswer = (answer: AnswerTypes) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  const resetQuiz = () => {
    setAnswers([]);
  };

  return (
    <QuizContext value={{ answers, addAnswer, resetQuiz }}>
      {children}
    </QuizContext>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export { QuizContext, QuizProvider, useQuizContext };
