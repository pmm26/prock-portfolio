import styled from "styled-components";
import BaseContainer from './BaseContainer'

interface ContainerType {
  headingLeft?: any;
  headingRight?: any;
  education?: any;
  project?: any;
  customFr?: [number, number];
}

// @ts-ignore
const EducationContainer = styled(BaseContainer)`

    @media screen and (max-width: 479px) { 
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    /* grid-template-areas: "heading" "image" "info" "divider" "image" "info" "divider" "image" "info" "divider"; */
  } 
`;

export default EducationContainer;
