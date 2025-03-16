import styled from 'styled-components'
import { HTMLAttributes } from "react";

const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  /* margin-left: 50px; */
  justify-self: center;
  align-self: auto;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
`

export default Container