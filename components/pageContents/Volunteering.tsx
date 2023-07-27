import Image from "next/image";
import { Fragment } from "react";
import { HeadingBox, ColoredSection, BasicContainer, EducationContainer, ImageBox, InfoBox } from "../molecules/SectionBox";
import { H1, H2, H3, H4 } from "../atoms/Heading";
import { P } from "../atoms/P";
import NewLineText from '../../components/atoms/NewLineText'

interface jobEntry {
  name: string;
  time: string;
  image: {
    src: string;
    width: string;
    height: string;
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
      <BasicContainer>
        <HeadingBox noArea mobileOrder={1} span={2}>
          <H1>{props.heading}</H1>
          <P white>{props.quote}</P>
        </HeadingBox>

        {props.jobs.map((job: jobEntry, index, array) => (
          <Fragment key={job.name}>
            <EducationContainer headingRight education>

              <InfoBox mobileOrder={index * 3 + 2 + 1} center>
                {/* Elite PT */}
                {/* <H2>{job.name}</H2> */}
                <ImageBox mobileOrder={index * 3 + 1 + 1} noArea>
                  <Image {...job.image} alt={job.name} />
                </ImageBox>
                <H3 fontSize="s">{job.time}</H3>
                <P white><NewLineText>{job.description}</NewLineText></P>
              </InfoBox>



              {/* {array.length - 1 !== index && (
                <Divider white mobileOrder={index * 3 + 3 + 1} />
              )} */}
            </EducationContainer>
          </Fragment>
        ))}
      </BasicContainer>
    </ColoredSection>
  );
};

export default Volunteering;
