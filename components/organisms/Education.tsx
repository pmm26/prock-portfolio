import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import SectionBox from "../molecules/SectionBox";
import Img from "next/image";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";
import SkillBars from "../molecules/SkillBars";

const Education = (_props: any) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingRight education customFr={[0.5, 1]}>
        <SectionBox.InfoBox noArea></SectionBox.InfoBox>

        <SectionBox.HeadingBox noArea>
          <h1 className="heading-9">Education</h1>
        </SectionBox.HeadingBox>

        {/* Other Charity */}
        <SectionBox.ImageBox noArea>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/1606404178_uok_logo_rgb294-removebg.png" loading="lazy" sizes="(max-width: 479px) 260px, (max-width: 767px) 32vw, (max-width: 991px) 33vw, 260px" srcSet="images/1606404178_uok_logo_rgb294-removebg-p-500.png 500w, images/1606404178_uok_logo_rgb294-removebg-p-800.png 800w, images/1606404178_uok_logo_rgb294-removebg-p-1080.png 1080w, images/1606404178_uok_logo_rgb294-removebg-p-1600.png 1600w, images/1606404178_uok_logo_rgb294-removebg.png 1654w" alt="University of Kent Logo" />
        </SectionBox.ImageBox>

        <SectionBox.InfoBox noArea>
          <h3 className="voluntering-title">University of Kent</h3>
          <p className="education-description">
            Computer Science (Artificial Intelligence) with Year in Industry{" "}
            <br />
            Upper Second-Class Honours 2:1
          </p>
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
          <h3 className="voluntering-title">
            City and Islington College <br />
            Centre for Business, Arts and Technology
          </h3>
          <p className="education-description">
            Pearson BTEC Level 3 Extended Diploma in IT (Software Development) –
            D* D* D* (Triple Distinction Star)
          </p>
        </SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  );
};

export default Education;
