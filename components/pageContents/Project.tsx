import Image from "next/image";
import SectionBox from "../molecules/SectionBox";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";
import { H1, H2 } from "../atoms/Heading";
import { P } from "../atoms/P";

import { buttonAction } from "../../types/actions";

interface ProjectProps {
  index: number;
  heading: string;
  image: StaticImageData;
  description: string;
  subTitle: string;
  subDescription: string;
  tech: string[];
  actions: buttonAction[];
}

const imageUrl = "../../public/images/"

const Project = (props: ProjectProps) => {
  const isEven = props.index%2 == 0
  const Section = isEven ? SectionBox.WhiteSection : SectionBox.ColoredSection

  return (
    <Section>
      <SectionBox.ProjectContainer {...(isEven ? {headingRight: true} : {})}>
        <SectionBox.HeadingBox>
          <H1>{props.heading}</H1>
        </SectionBox.HeadingBox>
        <SectionBox.ImageBox>
          <Image src={props.image} alt={props.heading} />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox center>
          <P {...(!isEven ? {white: true} : {})}>{props.description}</P>
          <H2>{props.subTitle}</H2>
          <P {...(!isEven ? {white: true} : {})}>{props.subDescription}</P>
          <TechIcons.IconContainer>
            {props.tech.map(icon => (
              <TechIcons.Icon key={icon} icon={icon} />
            ))}
          </TechIcons.IconContainer>
        </SectionBox.InfoBox>

        <SectionBox.ButtonsBox>
          {props.actions.map((action) => (
            <Button black key={action.href} href={action.href}>
              {action.title}
            </Button>
          ))}
        </SectionBox.ButtonsBox>
      </SectionBox.ProjectContainer>
    </Section>
  );
};

export default Project;
