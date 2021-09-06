import Image from "next/image";
import SectionBox from "../molecules/SectionBox";
import { H1, H2 } from "../atoms/Heading";
import { P } from "../atoms/P";
import ukcImage from '../../public/images/ukc.png'
import candiImage from '../../public/images/candi.jpg'

const Education = (_props: any) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingRight education customFr={[0.5, 1]}>
        <SectionBox.InfoBox noArea></SectionBox.InfoBox>

        <SectionBox.HeadingBox noArea>
          <H1>Education</H1>
        </SectionBox.HeadingBox>

        {/* Other Charity */}
        <SectionBox.ImageBox noArea>
          <Image 
            src={ukcImage} 
            alt="University of Kent" 
            // layout="responsive"s 
            />
        </SectionBox.ImageBox>

        <SectionBox.InfoBox noArea center>
          <H2 fontSize="m">University of Kent</H2>
          <P>
            Computer Science (Artificial Intelligence) with Year in Industry{" "}
            <br />
            Upper Second-Class Honours 2:1
          </P>
        </SectionBox.InfoBox>

        <SectionBox.Divider />

        {/* Cancer Research PT */}
        <SectionBox.ImageBox noArea>
        <Image 
          src={candiImage} 
          alt="City and Islington College" 
          // layout="responsive" 
          />

        </SectionBox.ImageBox>

        <SectionBox.InfoBox noArea center>
          <H2 fontSize="m">
            City and Islington College 
            <br />
            Centre for Business, Arts and Technology
          </H2>
          <P>
            Pearson BTEC Level 3 Extended Diploma in IT (Software Development) –
            D* D* D* (Triple Distinction Star)
          </P>
        </SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  );
};

export default Education;
