'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InfoBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  noArea?: boolean;
  center?: boolean;
  mobileOrder?: number;
}

export function InfoBox({ children, className, noArea, center, mobileOrder, ...props }: InfoBoxProps) {
  return (
    <div 
      className={twMerge(
        "flex flex-col px-1.5",
        center && "justify-center items-center text-center",
        !noArea && "grid-area-[info]",
        "max-sm:justify-center max-sm:text-center",
        mobileOrder && `sm:order-${mobileOrder}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
