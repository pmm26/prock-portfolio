import styled from "styled-components";
import {BaseContainer } from './BaseContainer'

interface ContainerType {
  headingLeft?: any;
  headingRight?: any;
  education?: any;
  project?: any;
  customFr?: [number, number];
}

// @ts-ignore
export const EducationContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  /* text-align: left;
  object-fit: fill;
  Default Heading Left */
  /* grid-template-columns: 1fr 1fr;
  grid-template-areas: "info image";  */

  /* text right, image left */
  /* ${({ headingRight }) =>
    headingRight && `
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "image info";
  `} */

  /* ${({ customFr }) =>
    customFr && `
      grid-template-columns: ${customFr[0]}fr ${customFr[1]}fr;
    `} */

  /* @media screen and (max-width: 479px) {
    grid-template-columns: 1fr; 
    grid-auto-flow: row;
     grid-template-areas: "heading" "image" "info" "buttons";
  } */
  /* grid-template-areas:
    "info image"; */


  /* Project Sections */
  /* ${({ headingRight }) =>
    headingRight &&
    `
    grid-template-areas: 
      "image info";
  `} */

    /* @media screen and (max-width: 479px) { 
      grid-template-columns: 1fr;
      grid-auto-flow: row;
      grid-template-areas: "heading" "image" "info" "divider" "image" "info" "divider" "image" "info" "divider";
  }  */
`;

export default EducationContainer;
