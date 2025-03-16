'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  headingLeft?: boolean;
  headingRight?: boolean;
  education?: boolean;
  project?: boolean;
  customFr?: [number, number];
}

export function Container({ 
  children, 
  className, 
  headingLeft, 
  headingRight, 
  customFr,
  ...props 
}: ContainerProps) {
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
        "justify-center items-center bg-transparent text-left object-fill",
        "max-sm:grid-cols-1",
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

export default Container;
