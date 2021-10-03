import Image from "next/image";
import { Fragment } from "react";
import SectionBox from "../molecules/SectionBox";
import { H1, H2, H3, H4 } from "../atoms/Heading";
import { P } from "../atoms/P";
import image from '../../public/images/candi.jpg'
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
    <SectionBox.ColoredSection>
      <SectionBox.EducationContainer headingLeft education customFr={[1, 0.5]}>
        <SectionBox.HeadingBox mobileOrder={1} span={2} noArea>
          <H1>{props.heading}</H1>
          <P white>{props.quote}</P>
        </SectionBox.HeadingBox>

        {props.jobs.map((job: jobEntry, index, array) => (
          <Fragment key={job.name}>
            <SectionBox.InfoBox mobileOrder={index * 3 + 2 + 1} noArea center>
              {/* Elite PT */}
              <H2>{job.name}</H2>
              <H3 fontSize="s">{job.time}</H3>
              <P white>{job.description}</P>
            </SectionBox.InfoBox>

            <SectionBox.ImageBox mobileOrder={index * 3 + 1 + 1} noArea>
              <Image {...job.image} alt={job.name} />
            </SectionBox.ImageBox>
            {array.length - 1 !== index && (
              <SectionBox.Divider white mobileOrder={index * 3 + 3 + 1} />
            )}
          </Fragment>
        ))}
      </SectionBox.EducationContainer>
    </SectionBox.ColoredSection>
  );
};

export default Volunteering;
