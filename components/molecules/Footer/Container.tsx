'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div 
      className={twMerge(
        "flex flex-shrink-0 -mt-0.5 h-[70px] flex-col justify-center items-center bg-orange",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}