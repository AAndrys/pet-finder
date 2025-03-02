import { FC } from 'react';
import { Checkbox as HeadlessCheckbox } from '@headlessui/react';

interface CheckboxProps {
  option: string;
  onClick: () => void;
  isActive?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ option, onClick, isActive = false }) => {
  return (
    <div className="inline-flex items-center">
      <HeadlessCheckbox
        checked={isActive}
        onChange={onClick}
        className="min-w-[16px] min-h-[16px] md:min-w-[25px] md:min-h-[25px] group block size-4 rounded border-[rgba(92,92,92,0.2)] bg-checkbox-bg data-[checked]:bg-white cursor-pointer"
      >
        <svg
          className=" stroke-black opacity-0 group-data-[checked]:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HeadlessCheckbox>

      <label className="text-sm md:text-lg ml-1.5">{option}</label>
    </div>
  );
};

export default Checkbox;
