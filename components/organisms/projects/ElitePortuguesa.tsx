import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";

import SectionBox from "../../molecules/SectionBox";
import Img from "next/image";
import Button from "../../atoms/Button";
import TechIcons from "../../molecules/TechIcons";
import { H1, H2, H3, H4 } from "../../atoms/Heading";
import { P } from "../../atoms/P";

const ElitePortuguesa = (_props: any) => {
  return (
    <SectionBox.ColoredSection>
      <SectionBox.ProjectContainer>
        <SectionBox.HeadingBox>
          <H1>Elite Portuguesa</H1>
        </SectionBox.HeadingBox>
        <SectionBox.ImageBox>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.images}
            src="images/sard-erostering-mock.png"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 56vw, 57vw"
            srcSet="images/sard-erostering-mock-p-500.png 500w, images/sard-erostering-mock-p-800.png 800w, images/sard-erostering-mock-p-1080.png 1080w, images/sard-erostering-mock-p-2600.png 2600w, images/sard-erostering-mock-p-3200.png 3200w, images/sard-erostering-mock.png 3411w"
            alt="Sard eRostering"
          />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox center>
          <P white>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet.{" "}
          </P>
          <H2>Technology</H2>
          <P white>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </P>
          {/* <TechIcons.Container> */}
            <TechIcons.IconContainer>
              <TechIcons.Icon icon="Figma" />
              <TechIcons.Icon icon="JavaScript" />
              <TechIcons.Icon icon="Expo" />
              <TechIcons.Icon icon="React Native" />
              <TechIcons.Icon icon="Redux" />
              <TechIcons.Icon icon="Jest" />
            </TechIcons.IconContainer>
          {/* </TechIcons.Container> */}
        </SectionBox.InfoBox>
        <SectionBox.ButtonsBox>
          <Button>Visit Website</Button>
          <Button>Source Code</Button>
        </SectionBox.ButtonsBox>
      </SectionBox.ProjectContainer>
    </SectionBox.ColoredSection>
  );
};

export default ElitePortuguesa;
