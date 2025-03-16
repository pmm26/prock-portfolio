'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

function Title({ children, className, ...props }: TitleProps) {
  return (
    <h2 
      className={twMerge(
        "font-futura-medium text-[22px] mb-4 font-normal text-left max-sm:text-center",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export default Title;