'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {}

function Title({ children, className, ...props }: TitleProps) {
  return (
    <div 
      className={twMerge(
        "ml-0 text-white mt-5 mb-2.5 text-[25px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Title;