import styled from 'styled-components'
import { HTMLAttributes } from "react";

export const FlexContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  flex-wrap: wrap;
  justify-content: space-between;
`
