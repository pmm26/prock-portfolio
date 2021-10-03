import Image from "next/image";
import SectionBox from "../molecules/SectionBox";
import { H1, H2 } from "../atoms/Heading";
import { P } from "../atoms/P";
import image from '../../public/images/desktopIlustration.svg'

const Intro = (props: {heading: string, title: string, description: string}) => {
  return (
    <SectionBox.ColoredSection>
      <SectionBox.Container headingRight customFr={[0.8, 1]}>
        <SectionBox.ImageBox >
          <Image 
            // layout={'responsive'}
            width={"443px"}
            height={"346px"}
            src={image} 
            alt="Desktop Ilustration" 
            />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox center>
          <H1>{props.heading}</H1>
          <H2>{props.title}</H2>
          <P white>{props.description}</P>
        </SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.ColoredSection>
  );
};

export default Intro;
