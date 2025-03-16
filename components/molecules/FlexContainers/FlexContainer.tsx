'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FlexContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FlexContainer({ children, className, ...props }: FlexContainerProps) {
  return (
    <div 
      className={twMerge(
        "mt-5 w-full flex flex-row items-center bg-transparent flex-wrap justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
