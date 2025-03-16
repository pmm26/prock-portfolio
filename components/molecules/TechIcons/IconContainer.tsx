'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IconContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  center?: boolean;
}

function IconContainer({ children, className, center, ...props }: IconContainerProps) {
  return (
    <div 
      className={twMerge(
        "flex flex-wrap content-center mb-4 flex-wrap object-none",
        center && "justify-center items-center",
        "max-sm:justify-center max-sm:items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default IconContainer;