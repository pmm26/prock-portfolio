import styled from 'styled-components'
import { HTMLAttributes } from "react";

interface ImageType extends HTMLAttributes<HTMLDivElement> {
  noArea?: any;
  mobileOrder?: number;
}

export const ImageBox = styled.div<ImageType>`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ noArea }) => !noArea &&`
    grid-area: image;
  `}

  @media screen and (max-width: 479px) {
    ${({ mobileOrder: order }) => order && `
      order: ${order};
    `}
  }

`