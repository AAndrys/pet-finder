import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <HeadlessButton
      tabIndex={0}
      className={`rounded-[100px] min-w-[116px] cursor-pointer bg-secondary py-[10px] px-[24px] text-sm text-white
                 data-[hover]:opacity-85 data-[active]:bg-active disabled:opacity-20 disabled:cursor-not-allowed ${className}`}
      {...props}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;
