'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BasicContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  headingLeft?: boolean;
  headingRight?: boolean;
  education?: boolean;
  project?: boolean;
  customFr?: [number, number];
}

export function BasicContainer({ 
  children, 
  className,
  headingLeft,
  headingRight,
  education,
  project,
  customFr,
  ...props 
}: BasicContainerProps) {
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
        // Core styles from original BasicContainer
        "max-w-[1100px] min-h-full min-w-[100px] mx-auto px-2.5",
        "justify-center items-center",
        "bg-transparent text-left pt-[50px] -mt-0.5",
        
        // Optional grid styles
        "grid gap-x-10 gap-y-4",
        
        // Mobile layout
        "max-sm:pt-0 max-sm:grid-cols-1",
        
        className
      )}
      style={{ 
        gridTemplateColumns,
        gridColumnGap: '40px', 
        gridRowGap: '16px',
        gridAutoColumns: '1fr',
        ...(headingRight || headingLeft) && {
          gridTemplateAreas: headingRight ? '"image info"' : '"info image"',
        },
        alignItems: 'center',
        objectFit: 'fill',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
