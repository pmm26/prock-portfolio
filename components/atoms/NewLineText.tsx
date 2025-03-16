'use client';

import React from 'react';

interface NewlineTextProps {
  children: string;
}

function NewlineText({ children }: NewlineTextProps) {
  const newText = children.split('\nn')
    .map((str: string, index: number, array: string[]) => {
      return (
        <React.Fragment key={index}>
          {str}
          {array.length - 1 !== index && (
            <br />
          )}
        </React.Fragment>
      );
    });
  
  return <>{newText}</>;
}

export default NewlineText;