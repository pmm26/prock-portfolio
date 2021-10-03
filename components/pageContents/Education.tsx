import Image from "next/image";
import SectionBox from "../molecules/SectionBox";
import { H1, H2 } from "../atoms/Heading";
import { P } from "../atoms/P";
import { Fragment } from "react";
import NewLineText from '../../components/atoms/NewLineText'

interface EducationEntry {
  name: string;
  image: {
    src: string;
    width: string;
    height: string;
  };
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
                {...entry.image}
                alt={entry.name}
              />
            </SectionBox.ImageBox>

            <SectionBox.InfoBox noArea center>
              <H2 fontSize="m"><NewLineText>{entry.name}</NewLineText></H2>
              <P><NewLineText>{entry.description}</NewLineText></P>
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
