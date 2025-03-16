import Image from "next/image";
import {
  HeadingBox,
  ImageBox,
  InfoBox,
  WhiteSection,
} from "../molecules/SectionBox";
import { H1, H2 } from "../atoms/Heading";
import { P } from "../atoms/P";
import NewLineText from "../../components/atoms/NewLineText";

interface EducationEntry {
  name: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  description: string;
}

interface EducationProps {
  heading: string;
  entries: EducationEntry[];
}

const Education = (props: EducationProps) => {
  return (
    <WhiteSection>
      <div className="max-w-[1100px] min-h-full min-w-[100px] mx-auto px-2.5 pt-[50px] -mt-0.5 max-sm:pt-0">
        {/* Heading */}
        <div className="flex justify-center mb-8 text-center">
          <H1>{props.heading}</H1>
        </div>

        {/* Container - Column on larger screens, Row on small screens TODO FIX! */}
        <div className="flex flex-row max-xs:flex-col flex-wrap justify-center gap-10">
          {/* Content area */}
          {props.entries.map((entry, index) => (
            <div key={entry.name} className="w-full flex flex-row">
              <div className="mb-6 flex justify-center">
                <Image
                  src={entry.image.src}
                  width={entry.image.width}
                  height={entry.image.height}
                  alt={entry.name}
                  className="mb-4"
                />
              </div>
              <div className="w-full mt-auto text-center">
                <H2 fontSize="m" className="text-center">
                  <NewLineText>{entry.name}</NewLineText>
                </H2>
                <P className="text-center">
                  <NewLineText>{entry.description}</NewLineText>
                </P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WhiteSection>
  );
};

export default Education;
