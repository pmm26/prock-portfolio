'use client';

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingType extends HTMLAttributes<HTMLHeadingElement> {
  fontSize?: "text" | "s" | "m" | "l" | "xl";
  textColour?: string;
}

export function H1({ children, className, fontSize, textColour, ...props }: HeadingType) {
  return (
    <h1 
      className={twMerge(
        "mt-0 mb-0 font-bold font-futura-bold text-purpleish text-4xl leading-[60px]",
        fontSize === "text" && "text-base",
        fontSize === "s" && "text-sm",
        fontSize === "m" && "text-base",
        fontSize === "l" && "text-xl",
        fontSize === "xl" && "text-4xl",
        textColour && `text-[${textColour}]`,
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, fontSize, textColour, ...props }: HeadingType) {
  return (
    <h2 
      className={twMerge(
        "mt-5 mb-2.5 font-normal font-futura-medium text-purpleish text-xl leading-9",
        fontSize === "text" && "text-base",
        fontSize === "s" && "text-sm",
        fontSize === "m" && "text-base",
        fontSize === "l" && "text-xl",
        fontSize === "xl" && "text-4xl",
        textColour && `text-[${textColour}]`,
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, fontSize, textColour, ...props }: HeadingType) {
  return (
    <h3 
      className={twMerge(
        "mt-5 mb-2.5 font-medium font-futura-medium text-purpleish text-base leading-[30px]",
        fontSize === "text" && "text-base",
        fontSize === "s" && "text-sm",
        fontSize === "m" && "text-base",
        fontSize === "l" && "text-xl",
        fontSize === "xl" && "text-4xl",
        textColour && `text-[${textColour}]`,
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, fontSize, textColour, ...props }: HeadingType) {
  return (
    <h4 
      className={twMerge(
        "mt-2.5 mb-2.5 font-normal font-futura-medium text-purpleish text-sm leading-6",
        fontSize === "text" && "text-base",
        fontSize === "s" && "text-sm",
        fontSize === "m" && "text-base",
        fontSize === "l" && "text-xl",
        fontSize === "xl" && "text-4xl",
        textColour && `text-[${textColour}]`,
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

