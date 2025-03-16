'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InBarProps extends React.HTMLAttributes<HTMLDivElement> {
  percentage: number;
}

function InBar({ percentage, className, ...props }: InBarProps) {
  return (
    <div 
      className={twMerge(
        "h-5 my-0 pt-0 rounded bg-[#dd5e98]",
        className
      )}
      style={{ width: `${percentage}%` }}
      {...props}
    />
  );
}

export default InBar;