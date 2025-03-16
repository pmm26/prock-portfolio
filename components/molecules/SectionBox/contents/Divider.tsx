'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  noArea?: boolean;
  mobileOrder?: number;
  white?: boolean;
}

export function Divider({ className, white, mobileOrder, ...props }: DividerProps) {
  return (
    <div 
      className={twMerge(
        white ? "border-b-2 border-dashed border-white" : "border-b-2 border-dashed border-black",
        "col-span-2 max-sm:col-span-1",
        mobileOrder && `sm:order-${mobileOrder}`,
        className
      )}
      {...props}
    />
  );
}


