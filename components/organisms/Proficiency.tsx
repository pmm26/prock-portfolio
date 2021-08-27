import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import SectionBox from "../molecules/SectionBox";
import Img from "next/image";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";
import SkillBars from "../molecules/SkillBars";
import { H1, H2, H3, H4 } from "../atoms/Heading";

const Proficiency = (_props: any) => {
  return (
    <SectionBox.ColoredSection>
      <SectionBox.Container headingRight customFr={[0.8, 1]}>
        <SectionBox.ImageBox>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/proficiency3x.png"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 41vw, 42vw"
            srcSet="images/proficiency3x-p-800.png 800w, images/proficiency3x-p-1080.png 1080w, images/proficiency3x.png 1282w"
            alt="Proficiency Ilustration"
            className="image-5"
          />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox>
          <H1>Proficiency</H1>

          <SkillBars.Container>
            <SkillBars.Title>Frontend</SkillBars.Title>
            <SkillBars.OutBar>
              <SkillBars.InBar percentage={70} ></SkillBars.InBar>
            </SkillBars.OutBar>
          </SkillBars.Container>

          <SkillBars.Container>
            <SkillBars.Title>Backend</SkillBars.Title>
            <SkillBars.OutBar>
              <SkillBars.InBar percentage={70} ></SkillBars.InBar>
            </SkillBars.OutBar>
          </SkillBars.Container>

          <SkillBars.Container>
            <SkillBars.Title>Design</SkillBars.Title>
            <SkillBars.OutBar>
              <SkillBars.InBar percentage={70} ></SkillBars.InBar>
            </SkillBars.OutBar>
          </SkillBars.Container>

          <SkillBars.Container>
            <SkillBars.Title>DevOps</SkillBars.Title>
            <SkillBars.OutBar>
              <SkillBars.InBar percentage={70} ></SkillBars.InBar>
            </SkillBars.OutBar>
          </SkillBars.Container>

        </ SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.ColoredSection>
  );
};

export default Proficiency;
