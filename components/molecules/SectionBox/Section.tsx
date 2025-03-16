'use client';

/* eslint-disable @next/next/no-img-element */

import React from 'react';

interface ColoredSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ColoredSection({ children, className }: ColoredSectionProps) {
  return (
    <div className={`border border-transparent bg-orange ${className || ''}`}>
      {children}
    </div>
  );
}

export function WhiteSection({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <img
        src="/images/bottom-wave.svg"
        alt=""
        className="section-image-bot"
      />
      {children}
      <img
        src="/images/top-wave.svg"
        alt=""
        className="section-image-top"
      />
    </div>
  );
}