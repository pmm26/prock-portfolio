'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BaseContainer } from './BaseContainer';

interface EducationContainerProps extends React.ComponentProps<typeof BaseContainer> {}

export function EducationContainer({ children, className, ...props }: EducationContainerProps) {
  return (
    <BaseContainer 
      className={twMerge(
        "max-sm:grid-cols-1 max-sm:grid-flow-row",
        className
      )}
      // style={{
      //   ['--mobile-grid-areas' as any]: '"heading" "image" "info" "divider" "image" "info" "divider" "image" "info" "divider"'
      // }}
      {...props}
    >
      {children}
    </BaseContainer>
  );
}


