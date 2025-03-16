import Image from "next/image";
import { Fragment } from "react";
import { HeadingBox, ColoredSection, EducationContainer, ImageBox, InfoBox, Divider } from "../molecules/SectionBox";
import { H1, H2, H3 } from "../atoms/Heading";
import { P } from "../atoms/P";
import NewLineText from '../../components/atoms/NewLineText'


interface jobEntry {
  name: string;
  time: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  description: string;
};

interface VolunteeringProps {
  heading: string;
  quote: string;
  jobs: jobEntry[];
}

const Volunteering = (props: VolunteeringProps) => {
  return (
    <ColoredSection>
      <EducationContainer headingLeft education={true} customFr={[0.5, 1 ]}>
        <HeadingBox mobileOrder={1} span={2} noArea>
          <H1>{props.heading}</H1>
          <P white>{props.quote}</P>
        </HeadingBox>

        {props.jobs.map((job: jobEntry, index, array) => (
          <Fragment key={job.name}>
                <ImageBox mobileOrder={index * 3 + 1 + 1} noArea>
              <Image 
                src={job.image.src}
                width={Number(job.image.width)}
                height={Number(job.image.height)}
                alt={job.name}
              />
            </ImageBox>

            <InfoBox mobileOrder={index * 3 + 2 + 1} noArea center>
              {/* Elite PT */}
              <H2>{job.name}</H2>
              <H3 fontSize="s">{job.time}</H3>
              <P white><NewLineText>{job.description}</NewLineText></P>
            </InfoBox>

        
            {array.length - 1 !== index && (
              <Divider white mobileOrder={index * 3 + 3 + 1} />
            )}
          </Fragment>
        ))}
      </EducationContainer>
    </ColoredSection>
  );
};


export default Volunteering;
