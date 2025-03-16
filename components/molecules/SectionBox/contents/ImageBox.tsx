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
        !noArea && "col-start-[image] col-end-[image] row-start-[image] row-end-[image]",
        mobileOrder && `sm:order-${mobileOrder}`,
        className
      )}
      style={!noArea ? { gridArea: 'image' } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}