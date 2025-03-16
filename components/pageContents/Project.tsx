import Image from "next/image";
import { HeadingBox, ColoredSection, ImageBox, InfoBox, ButtonsBox, ProjectContainer, WhiteSection } from "../molecules/SectionBox";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";
import { H1, H2 } from "../atoms/Heading";
import { P } from "../atoms/P";
import NewLineText from '../../components/atoms/NewLineText'

import { buttonAction } from "../../types/actions";

interface ProjectProps {
  index: number;
  heading: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  description: string;
  subTitle: string;
  subDescription: string;
  tech: string[];
  tech2?: string[];
  actions: buttonAction[];
}

const Project = (props: ProjectProps) => {
  const isEven = props.index % 2 == 0
  const Section = isEven ? WhiteSection : ColoredSection

  return (
    <Section>
      <ProjectContainer {...(isEven ? { headingRight: true } : {})}>
        <HeadingBox>
          <H1>{props.heading}</H1>
        </HeadingBox>
        <ImageBox>
          <Image 
            src={props.image.src}
            width={Number(props.image.width)}
            height={Number(props.image.height)}
            alt={props.heading}
          />
        </ImageBox>
        <InfoBox center>
          <P {...(!isEven ? { white: true } : {})}><NewLineText>{props.description}</NewLineText></P>
          <H2>{props.subTitle}</H2>
          <P {...(!isEven ? { white: true } : {})}><NewLineText>{props.subDescription}</NewLineText></P>
          {/* Tech Icons 1 */}
          <TechIcons.IconContainer center>
            {props.tech.map(icon => (
              <TechIcons.Icon key={icon} icon={icon} />
            ))}
          </TechIcons.IconContainer>
          {/* Tech Icons 2 - not always present*/}
          <TechIcons.IconContainer center>
            {props.tech2?.map(icon => (
              <TechIcons.Icon key={icon} icon={icon} />
            ))}
          </TechIcons.IconContainer>

        </InfoBox>

        <ButtonsBox>
          {props.actions.map((action) => (
            <Button {...(isEven ? { black: true } : {})} key={action.href} href={action.href}>
              {action.title}
            </Button>
          ))}
        </ButtonsBox>
      </ProjectContainer>
    </Section>
  );
};

export default Project;

