'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ImageBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  noArea?: boolean;
  mobileOrder?: number;
}

export function ImageBox({ children, className, noArea, mobileOrder, ...props }: ImageBoxProps) {
  return (
    <div 
      className={twMerge(
        "flex h-full justify-center items-center flex-col",
        !noArea && "grid-area-[image]",
        mobileOrder && `sm:order-${mobileOrder}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}