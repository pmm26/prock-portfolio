 'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FooterBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FooterBox({ children, className, ...props }: FooterBoxProps) {
  return (
    <div 
      className={twMerge(
        "flex w-full max-w-[1100px] mx-auto px-[35px] justify-center items-center bg-transparent",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}