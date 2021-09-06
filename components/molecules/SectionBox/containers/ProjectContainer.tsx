import styled from "styled-components";
import BaseContainer from "./BaseContainer";

interface ContainerType {
  headingLeft?: any;
  headingRight?: any;
  education?: any;
  project?: any;
  customFr?: [number, number];
}

const ProjectContainer = styled(BaseContainer)`
  grid-template-areas:
    "heading image"
    "info image"
    "buttons buttons";

  /* Project Sections */
  ${({ headingRight }) =>
    headingRight &&
    `
    grid-template-areas: 
      "image heading" 
      "image info" 
      "buttons buttons";
  `}

  @media screen and (max-width: 479px) {
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    grid-template-areas: "image" "heading"  "info" "buttons";
  }
`;

export default ProjectContainer;
