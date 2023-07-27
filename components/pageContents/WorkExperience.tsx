import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { HeadingBox, ColoredSection, ImageBox, InfoBox, ButtonsBox,ProjectContainer,WhiteSection } from "../molecules/SectionBox";
import Img from "next/image";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";
import SkillBars from "../molecules/SkillBars";
import { H1, H2, H3, H4 } from "../atoms/Heading";
import { P } from "../atoms/P";

import { buttonAction } from '../../types/actions'

interface WorkExperienceProps {
  heading: string;
  jobs: {
    company: string;
    jobTitle: string;
    time: string;
    image: {
      name: string;
      src: string;
    };
    keyPoits: string[];
    actions: {
      title: string;
      href: string;
    }[];
  }[];
}

const WorkExperience = (props: WorkExperienceProps) => {

  return (
    <>
      {props.jobs.map((job, index) => {
        const isEven = index % 2 == 0
        const Section = isEven ? ColoredSection : WhiteSection
        return (
          <Section key={job.company}>
            <ProjectContainer {...(isEven ? { headingRight: true } : {})}>
              <ImageBox>
                <Image {...job.image} />
              </ImageBox>
              <HeadingBox>
                <H1>{props.heading}</H1>
              </HeadingBox>
              <InfoBox center>
                <div key={job.jobTitle}>
                  <H2>{job.jobTitle}</H2>
                  <H3 fontSize="s">{job.time}</H3>
                  <ul role="list">
                    {job.keyPoits.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </InfoBox>
              <ButtonsBox>
                {job.actions.map((action) => (
                  <Button black key={action.href} href={action.href}>
                    {action.title}
                  </Button>
                ))}
              </ButtonsBox>
            </ProjectContainer>
          </Section>
        )
      })}
    </>
  );
};

export default WorkExperience;
