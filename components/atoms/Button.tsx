'use client';

import { twMerge } from "tailwind-merge";

interface ButtonProps {
  black?: boolean;
  height?: number;
  width?: number;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function Button({ black, height, width, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "flex justify-center items-center rounded-xl font-futura-book text-2xl text-center border-none m-2.5",
        "bg-[#fafdff] text-orange",
        black && "bg-black text-white",
        className
      )}
      style={{
        height: height ? `${height}px` : '50px',
        width: width ? `${width}px` : '200px',
      }}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps extends ButtonProps {
  href?: string;
}

const ButtonLink = ({ href, children, ...props }: ButtonLinkProps) => {
  return (
    <a href={href}>
      <Button {...props}>{children}</Button>
    </a>
  );
};

export default ButtonLink;
