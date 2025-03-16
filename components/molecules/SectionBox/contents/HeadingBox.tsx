'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface HeadingBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number;
  noArea?: boolean;
  mobileOrder?: number;
}

export function HeadingBox({ children, className, span, noArea, mobileOrder, ...props }: HeadingBoxProps) {
  return (
    <div 
      className={twMerge(
        "flex justify-center items-center text-center flex-col",
        span && `col-span-${span}`,
        "max-sm:col-span-1",
        mobileOrder && `sm:order-${mobileOrder}`,
        className
      )}
      style={!noArea ? { gridArea: 'heading' } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}

