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
import { P } from "../atoms/P";

const Voluntering = (_props: any) => {
  return (
    <SectionBox.ColoredSection>
      <SectionBox.Container headingLeft education customFr={[1, 0.5]}>
        <SectionBox.HeadingBox span={2} noArea>
          <H2>Community Projects &amp; Voluntering</H2>
          <P>
            “The best way to find yourself is to lose yourself in the service of
            others.” – Gandhi
          </P>
        </SectionBox.HeadingBox>

        <SectionBox.InfoBox noArea>
          {/* Elite PT */}
          <H2>
            Elite Portuguesa Community - Non Profit
          </H2>
          <H3 fontSize="s">August 2012 – Present</H3>
          <P>
            In 2012 me and my friend and I started a gaming community and It has
            been running since. I’m responsible for all the servers.
          </P>
        </SectionBox.InfoBox>

        <SectionBox.ImageBox noArea>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          Image
        </SectionBox.ImageBox>
        <SectionBox.Divider />

        {/* Other Charity */}
        <SectionBox.InfoBox noArea>
          <H2>
            Elite Portuguesa Community - Non Profit
          </H2>
          <H4 fontSize="s">August 2012 – Present</H4>
          <P>
            In 2012 me and my friend and I started a gaming community and It has
            been running since. I’m responsible for all the servers.
          </P>
        </SectionBox.InfoBox>

        <SectionBox.ImageBox noArea>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/Age-UK-LLL-Logo-CMYK-5-Spot-Colour.png"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 35vw, 32vw"
            srcSet="images/Age-UK-LLL-Logo-CMYK-5-Spot-Colour-p-500.png 500w, images/Age-UK-LLL-Logo-CMYK-5-Spot-Colour-p-800.png 800w, images/Age-UK-LLL-Logo-CMYK-5-Spot-Colour.png 1024w"
            alt="AgeUK Logo"
          />
        </SectionBox.ImageBox>

        <SectionBox.Divider />
        {/* Cancer Research PT */}
        <SectionBox.InfoBox noArea>
          <H2>
            Elite Portuguesa Community - Non Profit
          </H2>
          <H3 fontSize="s">August 2012 – Present</H3>
          <P>
            In 2012 me and my friend and I started a gaming community and It has
            been running since. I’m responsible for all the servers.
          </P>
        </SectionBox.InfoBox>

        <SectionBox.ImageBox noArea>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/1200px-Cancer_Research_UK.svg.png"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, 64vw"
            srcSet="images/1200px-Cancer_Research_UK.svg-p-800.png 800w, images/1200px-Cancer_Research_UK.svg-p-1080.png 1080w, images/1200px-Cancer_Research_UK.svg.png 1200w"
            alt="Cancer Research UK"
          ></img>
        </SectionBox.ImageBox>
      </SectionBox.Container>
    </SectionBox.ColoredSection>
  );
};

export default Voluntering;
