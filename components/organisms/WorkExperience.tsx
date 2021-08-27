import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import SectionBox from "../molecules/SectionBox";
import Img from "next/image";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";
import SkillBars from "../molecules/SkillBars";

const WorkExperience = (_props: any) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingRight>
        <SectionBox.ImageBox>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/SARD-logo-stacked-col-blk-md.png"
            loading="lazy"
            alt="Sard Logo"
          />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox>
          <h1 className="heading-9">Work Experience</h1>

          <div>
            <h2 className="heading-15">Software Developer</h2>
            <h4 className="heading-14">June 2019 – September 2020</h4>
            <ul role="list" className="work-list">
              <li className="work-list-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.{" "}
              </li>
              <li className="work-list-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.{" "}
              </li>
            </ul>
            <h4 className="heading-14">September 2020 – Present</h4>
            <ul role="list" className="work-list">
              <li className="work-list-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.{" "}
              </li>
              <li className="work-list-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.{" "}
              </li>
            </ul>
          </div>
        </SectionBox.InfoBox>
        <SectionBox.ButtonsBox>
          <Button>Visit Website</Button>
        </SectionBox.ButtonsBox>
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  );
};

export default WorkExperience;
