"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={twMerge("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
