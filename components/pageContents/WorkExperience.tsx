import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import SectionBox from "../molecules/SectionBox";
import Img from "next/image";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";
import SkillBars from "../molecules/SkillBars";
import { H1, H2, H3, H4 } from "../atoms/Heading";
import { P } from "../atoms/P";
import image from '../../public/images/SARD-logo-stacked-col-blk-md.png'

const WorkExperience = (_props: any) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingRight>
        <SectionBox.ImageBox>
          <Image 
            src={image} 
            alt="Sard" 
            // layout="responsive" 
            />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox center>
          <H1>Work Experience</H1>

          <div>
            <H2>Software Developer</H2>
            <H3 fontSize="s">June 2019 – Present</H3>
            <ul role="list">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet.
              </li>
            </ul>
          </div>
        </SectionBox.InfoBox>
        <SectionBox.ButtonsBox>
          <Button black>
            
          </Button>
        </SectionBox.ButtonsBox>
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  );
};

export default WorkExperience;
