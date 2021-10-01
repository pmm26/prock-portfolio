import type { NextPage } from "next";
import Image from "next/image";

import SectionBox from "../molecules/SectionBox";
import SkillBars from "../molecules/SkillBars";
import { H1 } from "../atoms/Heading";
import image from '../../public/images/proficiency3x.png'

const Proficiency = (_props: any) => {
  return (
    <SectionBox.ColoredSection>
      <SectionBox.Container headingRight customFr={[0.8, 1]}>
        <SectionBox.ImageBox>
          <Image 
            src={image} 
            alt="Proficiency Ilustration" 
            // layout="responsive" 
            />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox center>
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
              <SkillBars.InBar percentage={40} ></SkillBars.InBar>
            </SkillBars.OutBar>
          </SkillBars.Container>

          <SkillBars.Container>
            <SkillBars.Title>DevOps</SkillBars.Title>
            <SkillBars.OutBar>
              <SkillBars.InBar percentage={50} ></SkillBars.InBar>
            </SkillBars.OutBar>
          </SkillBars.Container>

        </ SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.ColoredSection>
  );
};

export default Proficiency;
