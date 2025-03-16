'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BaseContainer } from './BaseContainer';

interface ProjectContainerProps extends React.ComponentProps<typeof BaseContainer> {}

export function ProjectContainer({ children, className, headingRight, ...props }: ProjectContainerProps) {
  return (
    <BaseContainer 
      className={twMerge(
        // Default grid areas
        "grid-areas-[heading_image,info_image,buttons_buttons]",
        
        // Heading right variation
        headingRight && "grid-areas-[image_heading,image_info,buttons_buttons]",
        
        // Mobile layout
        "max-sm:grid-cols-1 max-sm:grid-areas-[image,heading,info,buttons]",
        
        className
      )}
      {...props}
    >
      {children}
    </BaseContainer>
  );
}

export default ProjectContainer;
