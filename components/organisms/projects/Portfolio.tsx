import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import SectionBox from "../../molecules/SectionBox";
import Img from "next/image";
import Button from "../../atoms/Button";
import TechIcons from "../../molecules/TechIcons";

const Portfolio = (_props: any) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingRight>
        <SectionBox.HeadingBox>
          <h1 className="heading-9">Portfolio Website</h1>
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
            <TechIcons.Icon srcFile="gitlab.png" alt="Gitlab" />
            <TechIcons.Icon srcFile="docker.png" alt="Docker" />
            <TechIcons.Icon srcFile="nextjs.png" alt="Next.JS" />
            <TechIcons.Icon srcFile="react.png" alt="React" />
            <TechIcons.Icon srcFile="styled-components.png" alt="Styled Components" />
          </TechIcons.IconContainer>
        </SectionBox.InfoBox>
        <SectionBox.ButtonsBox>
          <Button black>Visit Website</Button>
          <Button black>Source Code</Button>
        </SectionBox.ButtonsBox>
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  )
}

export default Portfolio