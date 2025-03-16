import styled from 'styled-components'
import { HTMLAttributes } from "react";

interface HeadingType extends HTMLAttributes<HTMLDivElement> {
  span?: number;
  noArea?: any
  mobileOrder?: number;
}

export const HeadingBox = styled.div<HeadingType>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  ${({ noArea }) => !noArea &&`
    grid-area: heading;
  `}

  /* 1 Collum Grid*/
  ${({ span }) => span &&`
    grid-column: 1 / span ${span};
  `}

  @media screen and (max-width: 479px) {
    ${({ mobileOrder: order }) => order && `
      order: ${order};
    `}
     grid-column: 1;
  }

`
