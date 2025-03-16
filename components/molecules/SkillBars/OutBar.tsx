'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface OutBarProps extends React.HTMLAttributes<HTMLDivElement> {}

function OutBar({ children, className, ...props }: OutBarProps) {
  return (
    <div 
      className={twMerge(
        "flex h-[35px] m-0 pt-[5px] pb-[5px] pl-[7px] flex-col justify-center items-start rounded-[11px] bg-white",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default OutBar;