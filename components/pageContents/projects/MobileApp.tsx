import Image from "next/image";
import SectionBox from "../../molecules/SectionBox";
import Button from "../../atoms/Button";
import TechIcons from "../../molecules/TechIcons";
import { H1, H2} from "../../atoms/Heading";
import { P } from "../../atoms/P";
import image from "../../../public/images/sard-mobile-app.png"

const MobileApp = (_props: any) => {
  return (
    <SectionBox.ColoredSection>
      <SectionBox.ProjectContainer>
        <SectionBox.HeadingBox>
          <H1>SARD Mobile App</H1>
        </SectionBox.HeadingBox>
        <SectionBox.ImageBox>
          <Image
            src={image}
            alt="Sard mobile app"
          />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox center>
          <P white>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
            lorem imperdiet.{" "}
          </P>
          <H2>Technology</H2>
          <P white>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
            lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </P>
          <TechIcons.IconContainer>
            <TechIcons.Icon icon="Figma" />
            <TechIcons.Icon icon="JavaScript" />
            <TechIcons.Icon icon="Expo" />
            <TechIcons.Icon icon="React Native" />
            <TechIcons.Icon icon="Redux" />
            <TechIcons.Icon icon="Jest" />
          </TechIcons.IconContainer>
        </SectionBox.InfoBox>
        <SectionBox.ButtonsBox>
          <Button>Visit Website</Button>
        </SectionBox.ButtonsBox>
      </SectionBox.ProjectContainer>
    </SectionBox.ColoredSection>
  )
}

export default MobileApp