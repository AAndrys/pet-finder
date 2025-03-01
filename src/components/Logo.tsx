import { FC } from 'react';
import { Link } from 'react-router';

import Dog from '../assets/gifs/dog-anim.gif';
import TextLogo from '../assets/pngs/petfinder-text-logo.png';
import TextLogoSmall from '../assets/pngs/petfinder-text-logo-small.png';
import { routes } from '../routes';

export interface LogoProps {
  size: 'large' | 'small';
}

const Logo: FC<LogoProps> = ({ size }) => {
  const large = (
    <div className="flex flex-col items-center">
      <img src={Dog} alt="Cute dog looking at the camera" width={150} />
      <img
        src={TextLogo}
        alt="Petfinder logo text, showcasing the brand name"
      />
    </div>
  );

  const small = (
    <Link
      to={routes.home}
      className="flex flex-col md:flex-row items-center px-4 md:px-0 md:w-fit"
    >
      <img
        className="w-[125px] md:w-[150px]"
        src={Dog}
        alt="Cute dog looking at the camera"
        width={150}
      />
      <img
        src={TextLogoSmall}
        alt="Petfinder logo text, showcasing the brand name"
      />
    </Link>
  );

  return size === 'large' ? large : small;
};

export default Logo;
