import React from 'react';
import { Button } from '@headlessui/react';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Button
      tabIndex={0}
      className={`rounded-[100px] min-w-[116px] cursor-pointer bg-secondary py-[10px] px-[24px] text-sm text-white
                 data-[hover]:opacity-85 data-[active]:bg-active ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
