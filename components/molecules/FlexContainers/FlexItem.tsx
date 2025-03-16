'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface FlexItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FlexItem({ children, className, ...props }: FlexItemProps) {
  return (
    <div 
      className={twMerge(
        "max-w-[500px] min-w-[450px] m-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
