import { FC } from 'react';
import clsx from 'clsx';

import ImagePlaceholder from '../assets/pngs/image-placeholder.png';

interface CardOptionProps {
  src: string | undefined;
  alt: string;
  option: string;
  onClick: () => void;
  isActive?: boolean;
}

const CardOption: FC<CardOptionProps> = ({
  src,
  alt,
  option,
  onClick,
  isActive = false,
}) => {
  return (
    <div
      className={clsx(
        'w-full border rounded-[10px] cursor-pointer bg-white hover:opacity-70 active:opacity-40 transition-opacity duration-200',
        isActive && 'outline-4 outline-active',
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="pt-[19px] pb-[9px] px-7 text-center h-full flex flex-col justify-around">
        <img
          className="mx-auto min-h-[83px] pointer-events-none select-none"
          src={src || ImagePlaceholder}
          alt={alt}
          width={83}
          height={83}
        />
        <span className="max-w-[94px] text-lg leading-[100%] inline-block mt-[9px] select-none">
          {option}
        </span>
      </div>
    </div>
  );
};

export default CardOption;
