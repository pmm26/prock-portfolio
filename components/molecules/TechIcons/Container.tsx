import styled from 'styled-components'
import { HTMLAttributes } from "react";

const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column; 
`

export default Container