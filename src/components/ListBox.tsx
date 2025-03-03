import { FC, useState } from 'react';
import {
  Listbox as HeadlessListbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import { QuizQuestion } from '../utils/quiz/questions';

interface ListboxProps {
  options: QuizQuestion['options'];
  // eslint-disable-next-line no-unused-vars
  onClick: (name: string) => void;
  isActive?: boolean;
}

const Listbox: FC<ListboxProps> = ({ options = [], onClick }) => {
  const [value, setValue] = useState(options[0]?.name || null);

  const handleChange = (name: string) => {
    onClick(name);
    setValue(name);
  };

  return (
    <div className="mx-auto w-full relative mt-4 z-1">
      <HeadlessListbox value={value} onChange={handleChange}>
        <ListboxButton
          className={clsx(
            'relative block w-full rounded-lg bg-white shadow-md cursor-pointer py-1.5 pr-8 pl-3 text-left text-sm/6',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
          )}
        >
          {value}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </ListboxButton>
        <ListboxOptions
          transition
          className={clsx(
            'w-[var(--button-width)] absolute left-0 right-0 overflow-y-auto max-h-48 rounded-xl border border-white/5 bg-white shadow-lg mt-1.5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0',
          )}
        >
          {options.map(({ name }) => (
            <ListboxOption
              key={uuidv4()}
              value={name}
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-secondary data-[focus]:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="invisible size-4 group-data-[selected]:visible"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>

              <div className="text-sm/6">{name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HeadlessListbox>
    </div>
  );
};

export default Listbox;
