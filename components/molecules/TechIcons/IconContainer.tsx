import styled from 'styled-components'
import { HTMLAttributes } from "react";

interface IconContainerType extends HTMLAttributes<HTMLDivElement> {
  center?: any;
}

const IconContainer = styled.div<IconContainerType>`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  /* margin-top: 15px; */
  margin-bottom: 15px;
  /* padding-top: 0px; */
  flex-wrap: wrap;
  object-fit: none;
  ${({ center }) => center &&`
    justify-content: center;
    align-items: center; 
  `}


  @media screen and (max-width: 479px) {
    justify-content: center;
    align-items: center; 
  }
`

export default IconContainer