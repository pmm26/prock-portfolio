'use client';

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PType extends HTMLAttributes<HTMLParagraphElement> {
  white?: boolean;
}

export function P({ children, className, white, ...props }: PType) {
  return (
    <p
      className={twMerge(
        "text-center font-futura-medium text-base leading-10 mx-1.5",
        white && "text-white",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
