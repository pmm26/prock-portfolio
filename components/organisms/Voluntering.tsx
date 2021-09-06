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
import ageUk from '../../public/images/Age-UK-LLL-Logo-CMYK-5-Spot-Colour.png'
import cancerResearch from '../../public/images/1200px-Cancer_Research_UK.svg.png'

const Voluntering = (_props: any) => {
  return (
    <SectionBox.ColoredSection>
      <SectionBox.EducationContainer headingLeft education customFr={[1, 0.5]}>
        <SectionBox.HeadingBox span={2} noArea>
          <H1>Community Projects &amp; Voluntering</H1>
          <P>
            “The best way to find yourself is to lose yourself in the service of
            others.” – Gandhi
          </P>
        </SectionBox.HeadingBox>

        <SectionBox.InfoBox noArea center>
          {/* Elite PT */}
          <H2>Elite Portuguesa Community - Non Profit</H2>
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
        <SectionBox.InfoBox noArea center>
          <H2>Elite Portuguesa Community - Non Profit</H2>
          <H4 fontSize="s">August 2012 – Present</H4>
          <P>
            In 2012 me and my friend and I started a gaming community and It has
            been running since. I’m responsible for all the servers.
          </P>
        </SectionBox.InfoBox>

        <SectionBox.ImageBox noArea>
          <Image
            src={ageUk}
            alt="AgeUK"
            // layout="responsive"
          />
        </SectionBox.ImageBox>

        <SectionBox.Divider />
        {/* Cancer Research PT */}
        <SectionBox.InfoBox noArea center>
          <H2>Elite Portuguesa Community - Non Profit</H2>
          <H3 fontSize="s">August 2012 – Present</H3>
          <P>
            In 2012 me and my friend and I started a gaming community and It has
            been running since. I’m responsible for all the servers.
          </P>
        </SectionBox.InfoBox>

        <SectionBox.ImageBox noArea>
          <Image
            src={cancerResearch}
            alt="Cancer Research UK"
            // layout="responsive"
          />
        </SectionBox.ImageBox>
      </SectionBox.EducationContainer>
    </SectionBox.ColoredSection>
  );
};

export default Voluntering;
