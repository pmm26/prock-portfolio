'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BaseContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  headingLeft?: boolean;
  headingRight?: boolean;
  education?: boolean | string;
  project?: boolean;
  customFr?: [number, number];
}

export function BaseContainer({ 
  children, 
  className, 
  headingLeft, 
  headingRight, 
  education,
  project,
  customFr,
  ...props 
}: BaseContainerProps) {
  // For custom fractions, we'll use inline style
  let gridTemplateColumns = '';
  if (customFr) {
    gridTemplateColumns = `${customFr[0]}fr ${customFr[1]}fr`;
  } else if (headingRight) {
    gridTemplateColumns = '0.7fr 1fr';
  } else {
    // Default (heading left)
    gridTemplateColumns = '1fr 0.7fr';
  }

  return (
    <div 
      className={twMerge(
        "grid max-w-[1100px] min-h-full min-w-[100px] mx-auto px-2.5 justify-center items-center",
        "gap-x-10 gap-y-4 bg-transparent text-left object-fill pt-[50px] -mt-0.5",
        
        // Mobile layout
        "max-sm:pt-0 max-sm:grid-cols-1",
        
        className
      )}
      style={{ 
        gridTemplateColumns,
        gridTemplateAreas: headingRight ? '"image info"' : '"info image"',
      }}
      {...props}
    >
      {children}
    </div>
  );
}

