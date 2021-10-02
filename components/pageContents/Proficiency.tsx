import type { NextPage } from "next";
import Image from "next/image";

import SectionBox from "../molecules/SectionBox";
import SkillBars from "../molecules/SkillBars";
import { H1 } from "../atoms/Heading";
import image from "../../public/images/proficiency3x.png";

type Skill = {
  title: string;
  percentage: number;
};

interface ProficiencyProps {
  heading: string;
  entries: Skill[];
}

const Proficiency = (props: ProficiencyProps) => {
  return (
    <SectionBox.ColoredSection>
      <SectionBox.Container headingRight customFr={[0.8, 1]}>
        <SectionBox.ImageBox>
          <Image
            src={image}
            alt="Proficiency Ilustration"
          />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox center>
          <H1>{props.heading}</H1>
          {props.entries.map((entry: Skill) => (
            <SkillBars.Container key={entry.title}>
              <SkillBars.Title>{entry.title}</SkillBars.Title>
              <SkillBars.OutBar>
                <SkillBars.InBar
                  percentage={entry.percentage}
                ></SkillBars.InBar>
              </SkillBars.OutBar>
            </SkillBars.Container>
          ))}
        </SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.ColoredSection>
  );
};

export default Proficiency;
