import styled from "styled-components";

interface ContainerType {
  headingLeft?: any;
  headingRight?: any;
  education?: any;
  project?: any;
  customFr?: [number, number];
}

// @ts-ignore
export const Container = styled.div<ContainerType>`
  justify-content: center;
  align-items: center;
  /* grid-auto-flow: row dense;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 16px; */
  background-color: transparent;
  text-align: left;
  object-fit: fill;
  /* grid-auto-flow: row; */


  /* Default Heading Left */
  grid-template-columns: 1fr 0.7fr;
  grid-template-areas: "info image";

  /* text right, image left */
  ${({ headingRight }) =>
    headingRight && `
    grid-template-columns: 0.7fr 1fr;
    grid-template-areas: 
      "image info";
  `}

  ${({ customFr }) =>
      customFr && `
      grid-template-columns: ${customFr[0]}fr ${customFr[1]}fr;
    `}

  @media screen and (max-width: 479px) {
    /* padding-top: 0px; */
    grid-template-columns: 1fr; 
    grid-auto-flow: row;
     grid-template-areas: "heading" "image" "info" "buttons";
  }
`;

export default Container;
