"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { BaseContainer } from "./BaseContainer";

interface ProjectContainerProps
  extends React.ComponentProps<typeof BaseContainer> {}

export function ProjectContainer({
  children,
  className,
  headingRight,
  ...props
}: ProjectContainerProps) {
  return (
    <BaseContainer
      className={twMerge(
        "gap-4",
        className
      )}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto auto auto",
        gridTemplateAreas: headingRight 
          ? "'image heading' 'image info' 'buttons buttons'"
          : "'heading image' 'info image' 'buttons buttons'"
      }}
      {...props}
    >
      {children}
    </BaseContainer>
  );
}

export default ProjectContainer;
