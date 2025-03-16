import Image from "next/image";
import { HeadingBox, ImageBox, InfoBox, WhiteSection } from "../molecules/SectionBox";
import { H1, H2 } from "../atoms/Heading";
import { P } from "../atoms/P";
import NewLineText from '../../components/atoms/NewLineText';

interface EducationEntry {
  name: string;
  image: {
    src: string;
    width: number;
    height: number;
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
      <div className="max-w-[1100px] min-h-full min-w-[100px] mx-auto px-2.5 pt-[50px] -mt-0.5 max-sm:pt-0">
        {/* Heading */}
        <div className="flex justify-center mb-8 text-center">
          <H1>{props.heading}</H1>
        </div>
        
        {/* Content area */}
        <div className="flex flex-row max-sm:flex-col gap-10">
          {/* Left side - First education entry */}
          <div className="flex-1 flex flex-col">
            {props.entries.length > 0 && (
              <div className="flex flex-col">
                <H2 fontSize="m"><NewLineText>{props.entries[0].name}</NewLineText></H2>
                <P><NewLineText>{props.entries[0].description}</NewLineText></P>
                
                <div className="mt-8 flex justify-center">
                  <Image
                    src={props.entries[0].image.src}
                    width={props.entries[0].image.width}
                    height={props.entries[0].image.height}
                    alt={props.entries[0].name}
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Right side - Second education entry */}
          <div className="flex-1 flex flex-col">
            {props.entries.length > 1 && (
              <div className="flex flex-col items-center">
                <Image
                  src={props.entries[1].image.src}
                  width={props.entries[1].image.width}
                  height={props.entries[1].image.height}
                  alt={props.entries[1].name}
                  className="mb-4"
                />
                <H2 fontSize="m" className="text-center"><NewLineText>{props.entries[1].name}</NewLineText></H2>
                <P className="text-center"><NewLineText>{props.entries[1].description}</NewLineText></P>
              </div>
            )}
          </div>
        </div>
      </div>
    </WhiteSection>
  );
};

export default Education;
