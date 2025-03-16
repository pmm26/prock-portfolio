import Image from "next/image";
import { HeadingBox, ImageBox, InfoBox, ButtonsBox, ProjectContainer, WhiteSection, ColoredSection } from "../molecules/SectionBox";
import { H1, H2, H3 } from "../atoms/Heading";
import Button from "../atoms/Button";

interface WorkExperienceProps {
  heading: string;
  jobs: {
    company?: string;
    jobTitle: string;
    time: string;
    image: {
      name?: string;
      alt: string;
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
        
        // Generate a stable, unique identifier for each job - include index as fallback
        // Hash the source URL to get a more unique identifier that won't change the data
        const imageHash = job.image.src.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
        const uniqueKey = `job-${imageHash}-${index}`;
        
        return (
          <Section key={uniqueKey}>
          <ProjectContainer {...(isEven ? { headingRight: true } : {})}>
              <ImageBox>
                <Image 
                  src={job.image.src}
                  width={500}
                  height={500}
                  alt={job.image.alt}
                />
                {job.company ? (
                  <div className="mt-[50px]">
                    <H1 textColour="black">{job.company}</H1>
                  </div>
                ) : (<></>)}
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
