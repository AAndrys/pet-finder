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
  value: string;
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
      { name: 'Dog', image: Dog, value: 'dog' },
      { name: 'Cat', image: Cat, value: 'cat' },
      { name: 'Rabbit', image: Rabbit, value: 'rabbit' },
      { name: 'Small & Furry', image: Furry, value: 'small-furry' },
      { name: 'Horse', image: Horse, value: 'horse' },
      { name: 'Bird', image: Bird, value: 'bird' },
      {
        name: 'Scales, Fins, & Other',
        image: Fish,
        value: 'scales-fins-other',
      },
      { name: 'Barnyard', image: Barnyard, value: 'barnyard' },
    ],
    type: 'card',
    isMultipleCheck: false,
  },
  {
    question: 'Do you have a specific breed in mind? (Select all that apply)',
    options: [],
    type: 'checkbox',
    isMultipleCheck: true,
  },
  {
    question: 'What size of pet do you prefer?',
    options: [
      { name: 'Small (0-25 lbs)', image: S, value: 'small' },
      { name: 'Medium (26-60 lbs)', image: M, value: 'medium' },
      { name: 'Large (61-100 lbs)', image: L, value: 'large' },
      { name: 'Extra Large (101 lbs or more)', image: XL, value: 'xlarge' },
    ],
    type: 'card',
    isMultipleCheck: false,
  },
  {
    question: 'What gender do you prefer for your pet?',
    options: [
      { name: 'Male', value: 'male' },
      { name: 'Female', value: 'female' },
    ],
    type: 'checkbox',
    isMultipleCheck: false,
  },
  {
    question: 'What age range are you looking for?',
    options: [
      { name: 'Puppy/Kitten (0-1 year)', value: 'baby' },
      { name: 'Young (1-3 years)', value: 'young' },
      { name: 'Adult (3-7 years)', value: 'adult' },
      { name: 'Senior (7+ years)', value: 'senior' },
    ],
    type: 'checkbox',
    isMultipleCheck: false,
  },
  {
    question: 'What energy level do you prefer for your pet?',
    options: [
      { name: 'Low energy (couch potato) 💤', value: 'low-energy' },
      {
        name: 'Moderate energy (playful, but also likes to relax) 🏡',
        value: 'moderate-energy',
      },
      {
        name: 'High energy (very active and playful) 🏃',
        value: 'high-energy',
      },
    ],
    type: 'checkbox',
    isMultipleCheck: false,
  },
  {
    question: 'What temperament do you prefer?',
    options: [
      { name: 'Friendly and social 🐶', value: 'friendly' },
      { name: 'Calm and laid-back 😌', value: 'calm' },
      { name: 'Independent and reserved 🐾', value: 'reserved' },
    ],
    type: 'checkbox',
    isMultipleCheck: false,
  },
  {
    question: 'Do you have children in your home?',
    options: [
      { name: 'Yes', value: 'true' },
      { name: 'No', value: 'false' },
    ],
    type: 'listbox',
    isMultipleCheck: false,
  },
  {
    question:
      'Are you interested in adopting a pet from a shelter or rescue organization?',
    options: [
      { name: 'Yes', value: 'true' },
      { name: 'No (I prefer breeders)', value: 'false' },
    ],
    type: 'listbox',
    isMultipleCheck: false,
  },
  {
    question: 'How soon are you looking to adopt a pet?',
    options: [
      { name: 'Right now', value: 'right-now' },
      { name: 'Within the next few weeks', value: 'few-weeks' },
      { name: 'In a few months', value: 'few-months' },
    ],
    type: 'checkbox',
    isMultipleCheck: false,
  },
];
