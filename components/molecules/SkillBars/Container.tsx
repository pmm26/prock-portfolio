'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div 
      className={twMerge(
        "justify-self-center self-auto w-full text-left mb-2.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;