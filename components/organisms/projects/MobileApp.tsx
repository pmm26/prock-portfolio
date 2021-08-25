import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import SectionBox from "../../molecules/SectionBox";
import Img from "next/image";
import Button from "../../atoms/Button";
import TechIcons from "../../molecules/TechIcons";


const MobileApp = (_props: any) => {
  return (
    <SectionBox.ColoredSection>
      <SectionBox.Container headingLeft>
        <SectionBox.HeadingBox>
          <h1 className="heading-9">SARD Mobile App</h1>
        </SectionBox.HeadingBox>
        <SectionBox.ImageBox>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sard-mobile-app.png"
            loading="lazy"
            width="193"
            sizes="193px"
            alt="Sard mobile app mock"
          />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox>
          <p className="white-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
            lorem imperdiet.{" "}
          </p>
          <h2>Technology</h2>
          <p className="white-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
            lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <TechIcons.IconContainer>
            <TechIcons.Icon srcFile="figma.png" alt="Figma Logo" />
            <TechIcons.Icon srcFile="javascript.png" alt="JavaScript" />
            <TechIcons.Icon srcFile="expo.png" alt="Expo Logo" />
            <TechIcons.Icon srcFile="react-native.png" alt="React  Native" />
            <TechIcons.Icon srcFile="redux.png" alt="Redux" />
            <TechIcons.Icon srcFile="jest.png" alt="Jest" />
          </TechIcons.IconContainer>
        </SectionBox.InfoBox>
        <SectionBox.ButtonsBox>
          <Button>Visit Website</Button>
        </SectionBox.ButtonsBox>
      </SectionBox.Container>
    </SectionBox.ColoredSection>
  )
}

export default MobileApp