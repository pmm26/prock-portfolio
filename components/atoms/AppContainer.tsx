'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface AppContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function AppContainer({ children, className, ...props }: AppContainerProps) {
  return (
    <div 
      className={twMerge(
        "block w-full mx-auto flex-row justify-center items-center self-stretch flex-none",
        "grid-cols-4 auto-rows-auto overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default AppContainer;