import Image from "next/image";
import SectionBox from "../molecules/SectionBox";
import { H1, H2 } from "../atoms/Heading";
import { P } from "../atoms/P";
import ukcImage from "../../public/images/ukc.png";
import candiImage from "../../public/images/candi.jpg";
import { Fragment } from "react";

type EducationEntry = {
  name: string;
  image: string;
  description: string;
};

interface EducationProps {
  heading: string;
  entries: EducationEntry[];
}

const Education = (props: EducationProps) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingRight education customFr={[0.5, 1]}>
        <SectionBox.InfoBox noArea></SectionBox.InfoBox>

        <SectionBox.HeadingBox noArea>
          <H1>{props.heading}</H1>
        </SectionBox.HeadingBox>

        {props.entries.map((entry: EducationEntry, index, array) => (
          <Fragment key={entry.name}>
            <SectionBox.ImageBox noArea>
              <Image
                src={ukcImage}
                alt="University of Kent"
              />
            </SectionBox.ImageBox>

            <SectionBox.InfoBox noArea center>
              <H2 fontSize="m">{entry.name}</H2>
              <P>{entry.description}</P>
            </SectionBox.InfoBox>

            {array.length - 1 !== index && (
              <SectionBox.Divider />
            )}
          </Fragment>
        ))}
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  );
};

export default Education;
