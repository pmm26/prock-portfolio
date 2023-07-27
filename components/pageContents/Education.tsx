import Image from "next/image";
import { HeadingBox, ImageBox, InfoBox, BaseContainer, Divider, WhiteSection } from "../molecules/SectionBox";
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
    <WhiteSection>
      <BaseContainer headingRight education customFr={[0.5, 1]}>
        <InfoBox noArea></InfoBox>

        <HeadingBox noArea>
          <H1>{props.heading}</H1>
        </HeadingBox>

        {props.entries.map((entry: EducationEntry, index, array) => (
          <Fragment key={entry.name}>
            <ImageBox noArea>
              <Image
                {...entry.image}
                alt={entry.name}
              />
            </ImageBox>

            <InfoBox noArea center>
              <H2 fontSize="m"><NewLineText>{entry.name}</NewLineText></H2>
              <P><NewLineText>{entry.description}</NewLineText></P>
            </InfoBox>

            {array.length - 1 !== index && (
              <Divider />
            )}
          </Fragment>
        ))}
      </BaseContainer>
    </WhiteSection>
  );
};

export default Education;
