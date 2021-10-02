import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import SectionBox from "../molecules/SectionBox";
import Img from "next/image";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";
import SkillBars from "../molecules/SkillBars";
import { H1, H2, H3, H4 } from "../atoms/Heading";
import { P } from "../atoms/P";
import image from "../../public/images/SARD-logo-stacked-col-blk-md.png";

import {buttonAction} from '../../types/actions'

type Job = {
  jobTitle: string;
  time: string;
  keyPoits: string[];
};

interface WorkExperienceProps {
  heading: string;
  jobs: Job[];
  actions: buttonAction[];
}

const WorkExperience = (props: WorkExperienceProps) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingRight>
        <SectionBox.ImageBox>
          <Image
            src={image}
            alt="Sard"
          />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox center>
          <H1>{props.heading}</H1>
          {props.jobs.map((job: Job) => (
            <div key={job.jobTitle}>
              <H2>{job.jobTitle}</H2>
              <H3 fontSize="s">{job.time}</H3>
              <ul role="list">
                {job.keyPoits.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </SectionBox.InfoBox>
        <SectionBox.ButtonsBox>
          {props.actions.map((action) => (
            <Button black key={action.href} href={action.href}>
              {action.title}
            </Button>
          ))}
        </SectionBox.ButtonsBox>
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  );
};

export default WorkExperience;
