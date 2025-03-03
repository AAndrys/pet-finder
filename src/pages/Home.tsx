import { FC } from 'react';
import { useNavigate } from 'react-router';

import Button from '../components/Button';
import Logo from '../components/Logo';
import { routes } from '../routes';

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  let navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Logo size="large" />

      <nav className="grid md:block mt-6" aria-label="Main navigation">
        <Button
          className="mb-3 md:mb-0 md:mr-[34px]"
          onClick={() => navigate(routes.pets)}
          aria-label="Go to Animals page"
        >
          ANIMALS
        </Button>
        <Button
          onClick={() => navigate(routes.quiz)}
          aria-label="Go to Quiz page"
        >
          QUIZ
        </Button>
      </nav>
    </div>
  );
};

export default Home;
