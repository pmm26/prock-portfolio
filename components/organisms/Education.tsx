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

const Education = (_props: any) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingRight education customFr={[0.5, 1]}>
        <SectionBox.InfoBox noArea></SectionBox.InfoBox>

        <SectionBox.HeadingBox noArea>
          <H1>Education</H1>
        </SectionBox.HeadingBox>

        {/* Other Charity */}
        <SectionBox.ImageBox noArea>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/1606404178_uok_logo_rgb294-removebg.png" loading="lazy" sizes="(max-width: 479px) 260px, (max-width: 767px) 32vw, (max-width: 991px) 33vw, 260px" srcSet="images/1606404178_uok_logo_rgb294-removebg-p-500.png 500w, images/1606404178_uok_logo_rgb294-removebg-p-800.png 800w, images/1606404178_uok_logo_rgb294-removebg-p-1080.png 1080w, images/1606404178_uok_logo_rgb294-removebg-p-1600.png 1600w, images/1606404178_uok_logo_rgb294-removebg.png 1654w" alt="University of Kent Logo" />
        </SectionBox.ImageBox>

        <SectionBox.InfoBox noArea>
          <H2 fontSize="m">University of Kent</H2>
          <P>
            Computer Science (Artificial Intelligence) with Year in Industry{" "}
            <br />
            Upper Second-Class Honours 2:1
          </P>
        </SectionBox.InfoBox>

        <SectionBox.Divider />

        {/* Cancer Research PT */}
        <SectionBox.ImageBox noArea>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/candi.jpg"
            loading="lazy"
            alt="City and Islington College Logo"
          />
        </SectionBox.ImageBox>

        <SectionBox.InfoBox noArea>
          <H2 fontSize="m">
            City and Islington College <br />
            Centre for Business, Arts and Technology
          </H2>
          <P>
            Pearson BTEC Level 3 Extended Diploma in IT (Software Development) –
            D* D* D* (Triple Distinction Star)
          </P>
        </SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  );
};

export default Education;
