'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonsBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  noArea?: boolean;
  mobileOrder?: number;
}

export function ButtonsBox({ children, className, noArea, mobileOrder, ...props }: ButtonsBoxProps) {
  return (
    <div 
      className={twMerge(
        "flex justify-around flex-wrap items-center",
        "col-span-2",
        "max-sm:col-span-1",
        mobileOrder && `sm:order-${mobileOrder}`,
        className
      )}
      style={!noArea ? { gridArea: 'buttons' } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}
