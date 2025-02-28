import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router';

import Dog from '../assets/dog-anim.gif';
import TextLogo from '../assets/petfinder-text-logo.png';
import Button from '../components/Button';

export interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  let navigate = useNavigate();

  return (
    <div className="min-h-screen flex-col flex items-center justify-center p-4">
      <section className="flex flex-col items-center">
        <img src={Dog} alt="Cute dog looking at the camera" width={150} />
        <img
          src={TextLogo}
          alt="Petfinder logo text, showcasing the brand name"
        />
      </section>

      <section className="grid md:block mt-6">
        <Button
          className="mb-3 md:mb-0 md:mr-[34px]"
          onClick={() => navigate('/')}
          aria-label="Go to Animals page"
        >
          ANIMALS
        </Button>
        <Button onClick={() => navigate('/quiz')} aria-label="Go to Quiz page">
          QUIZ
        </Button>
      </section>
    </div>
  );
};

export default Home;
