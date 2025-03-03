import { FC, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import FavouritesIcon from '../assets/svgs/star.svg';

import Tooltip from './Tooltip';

interface FavouritesProps {}

const Favourites: FC<FavouritesProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <div
      className="fixed bottom-6 right-6"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      onClick={handleClick}
    >
      <div className="cursor-pointer">
        <img src={FavouritesIcon} alt="Favourites button" />

        <div className="absolute -top-0 -right-[-4px] w-5 h-5 bg-red-600 text-white text-xs font-bold flex items-center justify-center rounded-full shadow">
          3
        </div>
      </div>
      <AnimatePresence>{isOpen && <Tooltip />}</AnimatePresence>
    </div>
  );
};

export default Favourites;
