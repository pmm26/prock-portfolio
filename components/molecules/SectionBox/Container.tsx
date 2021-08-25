
import styled from 'styled-components'

interface ContainerType {
  headingLeft?: any;
  headingRight?: any;
  customFr?: [number, number]
}

// @ts-ignore
const Container = styled.div<ContainerType>`
  display: grid;
  max-width: 1100px;
  min-height: 100%;
  min-width: 100px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
  justify-content: center;
  align-items: center;
  grid-auto-flow: row dense;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto auto;
  background-color: transparent;
  text-align: left;
  object-fit: fill;


  /* Default Heading Left */
  margin-top: -2px;
  grid-template-columns: 1fr 0.7fr;
  grid-template-areas: 
    "heading image" 
    "info image" 
    "buttons buttons";

  ${({ headingLeft }) => headingLeft && `
    margin-top: -2px;
    grid-template-columns: 1fr 0.7fr;
    grid-template-areas: 
      "heading image" 
      "info image" 
      "buttons buttons";
  `}

${({ headingRight }) => headingRight && `
    margin-top: -53px;
    grid-template-columns: 0.7fr 1fr;
    grid-template-areas: 
      "image heading" 
      "image info" 
      "buttons buttons";
  `}

${({ customFr }) => customFr && `
    grid-template-columns: ${customFr[0]}fr ${customFr[1]}fr;
  `}
`


export default Container