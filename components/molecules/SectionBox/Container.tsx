
import styled from 'styled-components'

// @ts-ignore
const Container = styled.div`
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
    "buttons buttons"

  ${({ headingLeft }: { headingLeft: any }) => headingLeft && `
    margin-top: -2px;
    grid-template-columns: 1fr 0.7fr;
    grid-template-areas: 
      "heading image" 
      "info image" 
      "buttons buttons"
  `}

${({ headingRight }: { headingRight: any }) => headingRight && `
    margin-top: -53px;
    grid-template-columns: 0.7fr 1fr;
    grid-template-areas: 
      "image heading" 
      "image info" 
      "buttons buttons"
  `}
`

export default Container