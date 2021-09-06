import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import SectionBox from "../molecules/SectionBox";
import Img from "next/image";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";
import { H1, H2, H3, H4 } from "../atoms/Heading";
import { P } from "../atoms/P";
import image from '../../public/images/desktopIlustration.svg'

const Intro = (_props: any) => {
  return (
    <SectionBox.ColoredSection>
      <SectionBox.Container headingRight customFr={[0.8, 1]}>
        <SectionBox.ImageBox>
          <Image 
            src={image} 
            alt="Desktop Ilustration" 
            />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox center>
          <H1>Pedro Roque</H1>
          <H2>Full-Stack Software Developer</H2>
          <P white>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </P>
        </SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.ColoredSection>
  );
};

export default Intro;
