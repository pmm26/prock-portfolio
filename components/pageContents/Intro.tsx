import { ColoredSection, ImageBox, InfoBox, BaseContainer, ButtonsBox } from "../molecules/SectionBox";
import { H1, H2 } from "../atoms/Heading";
import { P } from "../atoms/P";
import image from "../../public/images/desktopIlustration.svg";
import NewLineText from "../../components/atoms/NewLineText";
import TechIcons from "../molecules/TechIcons";
import ButtonLink from "../atoms/Button";
import Image from "next/image";
import gilabImage from "../../public/images/icons/gitlab.png";
import cvImage from "../../public/images/icons/cv.png";

const Intro = (props: {
  heading: string;
  title: string;
  description: string;
}) => {
  return (
    <ColoredSection>
      <BaseContainer headingRight customFr={[0.8, 1]}>
        <ImageBox>
          <Image
            // layout={'responsive'}
            width={"443px"}
            height={"346px"}
            src={image}
            alt="Desktop Ilustration"
          />
        </ImageBox>
        <InfoBox center>
          <H1>{props.heading}</H1>
          <H2>{props.title}</H2>
          <P white>
            <NewLineText>{props.description}</NewLineText>
          </P>
          <ButtonsBox>
            <ButtonLink height={60} href="https://gitlab.com/xdpedrox">
              <Image width="45px" height="45px" src={gilabImage} alt="Gitlab" />
              <span className="button-text">Gitlab</span>
            </ButtonLink>
            <ButtonLink height={60} href="/Pedro%20Roque%20CV.pdf">
              <Image
                width="45px"
                height="45px"
                src={cvImage}
                alt="Download CV"
              />
              <span className="button-text">CV</span>
            </ButtonLink>
          </ButtonsBox>
        </InfoBox>
      </BaseContainer>
    </ColoredSection>
  );
};

export default Intro;
