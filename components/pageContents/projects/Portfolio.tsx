import Image from "next/image";
import SectionBox from "../../molecules/SectionBox";
import Button from "../../atoms/Button";
import TechIcons from "../../molecules/TechIcons";
import { H1, H2} from "../../atoms/Heading";
import { P } from "../../atoms/P";
import image from "../../../public/images/sard-mobile-app.png"

const Portfolio = (_props: any) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.ProjectContainer headingRight>
        <SectionBox.HeadingBox>
          <H1>Portfolio Website</H1>
        </SectionBox.HeadingBox>
        <SectionBox.ImageBox>
        <Image
            src={image}
            alt="Sard mobile app"
          />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox center>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
            lorem imperdiet.{" "}
          </P>
          <H2>Technology</H2>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
            lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </P>
          <TechIcons.IconContainer>
            <TechIcons.Icon icon="Gitlab" />
            <TechIcons.Icon icon="Docker" />
            <TechIcons.Icon icon="NextJS" />
            <TechIcons.Icon icon="React" />
            <TechIcons.Icon icon="Styled Components" />
          </TechIcons.IconContainer>
        </SectionBox.InfoBox>
        <SectionBox.ButtonsBox>
          <Button black>Visit Website</Button>
          <Button black>Source Code</Button>
        </SectionBox.ButtonsBox>
      </SectionBox.ProjectContainer>
    </SectionBox.WhiteSection>
  )
}

export default Portfolio