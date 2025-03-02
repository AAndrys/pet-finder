import Barnyard from '../../assets/svgs/barnyard.svg';
import Bird from '../../assets/svgs/bird.svg';
import Cat from '../../assets/svgs/cat.svg';
import Dog from '../../assets/svgs/dog.svg';
import Fish from '../../assets/svgs/fish.svg';
import Furry from '../../assets/svgs/furry.svg';
import Horse from '../../assets/svgs/horse.svg';
import L from '../../assets/svgs/L.svg';
import M from '../../assets/svgs/M.svg';
import Rabbit from '../../assets/svgs/rabbit.svg';
import S from '../../assets/svgs/S.svg';
import XL from '../../assets/svgs/XL.svg';

export interface Option {
  name: string;
  image?: string;
}

export interface QuizQuestion {
  question: string;
  options: Option[];
  type: 'card' | 'checkbox' | 'listbox';
  isMultipleCheck: boolean;
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
    type: 'card',
    isMultipleCheck: false,
  },
  {
    question: 'Do you have a specific breed in mind? (Select all that apply)',
    options: [
      { name: 'American bully' },
      { name: 'Beagle' },
      { name: 'Belgian Shepherd / Sheepdog' },

      { name: 'American bully' },
      { name: 'Beagle' },
      { name: 'Belgian Shepherd / Sheepdog' },

      { name: 'American bully' },
      { name: 'Beagle' },
      { name: 'Belgian Shepherd / Sheepdog' },

      { name: 'American bully' },
      { name: 'Beagle' },
      { name: 'Belgian Shepherd / Sheepdog' },

      { name: 'American bully' },
      { name: 'Beagle' },
      { name: 'Belgian Shepherd / Sheepdog' },

      { name: 'American bully' },
      { name: 'Beagle' },
      { name: 'Belgian Shepherd / Sheepdog' },

      { name: 'American bully' },
      { name: 'Beagle' },
      { name: 'Belgian Shepherd / Sheepdog' },
    ],
    type: 'checkbox',
    isMultipleCheck: true,
  },
  {
    question: 'What size of pet do you prefer?',
    options: [
      { name: 'Small (0-25 lbs)', image: S },
      { name: 'Medium (26-60 lbs)', image: M },
      { name: 'Large (61-100 lbs)', image: L },
      { name: 'Extra Large (101 lbs or more)', image: XL },
    ],
    type: 'card',
    isMultipleCheck: false,
  },
  {
    question: 'What gender do you prefer for your pet?',
    options: [{ name: 'Male' }, { name: 'Female' }],
    type: 'checkbox',
    isMultipleCheck: false,
  },
  {
    question: 'What age range are you looking for?',
    options: [
      { name: 'Puppy/Kitten (0-1 year)' },
      { name: 'Young (1-3 years)' },
      { name: 'Adult (3-7 years)' },
      { name: 'Senior (7+ years)' },
    ],
    type: 'checkbox',
    isMultipleCheck: false,
  },
  {
    question: 'What energy level do you prefer for your pet?',
    options: [
      { name: 'Low energy (couch potato) 💤' },
      { name: 'Moderate energy (playful, but also likes to relax) 🏡' },
      { name: 'High energy (very active and playful) 🏃' },
    ],
    type: 'checkbox',
    isMultipleCheck: false,
  },
  {
    question: 'What temperament do you prefer?',
    options: [
      { name: 'Friendly and social 🐶' },
      { name: 'Calm and laid-back 😌' },
      { name: 'Independent and reserved 🐾' },
    ],
    type: 'checkbox',
    isMultipleCheck: false,
  },
  {
    question: 'Do you have children in your home?',
    options: [{ name: 'Yes' }, { name: 'No' }],
    type: 'listbox',
    isMultipleCheck: false,
  },
  {
    question:
      'Are you interested in adopting a pet from a shelter or rescue organization?',
    options: [{ name: 'Yes' }, { name: 'No (I prefer breeders)' }],
    type: 'listbox',
    isMultipleCheck: false,
  },
  {
    question: 'How soon are you looking to adopt a pet?',
    options: [
      { name: 'Right now' },
      { name: 'Within the next few weeks' },
      { name: 'In a few months' },
    ],
    type: 'checkbox',
    isMultipleCheck: false,
  },
];
