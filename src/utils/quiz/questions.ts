import Barnyard from '../../assets/svgs/barnyard.svg';
import Bird from '../../assets/svgs/bird.svg';
import Cat from '../../assets/svgs/cat.svg';
import Dog from '../../assets/svgs/dog.svg';
import Fish from '../../assets/svgs/fish.svg';
import Furry from '../../assets/svgs/furry.svg';
import Horse from '../../assets/svgs/horse.svg';
import Rabbit from '../../assets/svgs/rabbit.svg';

interface Option {
  name: string;
  image?: string;
}

export interface QuizQuestion {
  question: string;
  options: Option[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'What type of pet would you like to adopt?',
    options: [
      { name: 'Dog', image: Dog },
      { name: 'Cat', image: Cat },
      { name: 'Rabbit', image: Rabbit },
      { name: 'Small & Furry', image: Furry },
      { name: 'Horse', image: Horse },
      { name: 'Bird', image: Bird },
      { name: 'Scales, Fins, & Other', image: Fish },
      { name: 'Barnyard', image: Barnyard },
    ],
  },
  {
    question: 'What is your favorite animal?',
    options: [{ name: 'Red' }],
  },
];
