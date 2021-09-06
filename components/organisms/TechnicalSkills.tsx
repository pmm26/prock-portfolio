import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import SectionBox from "../molecules/SectionBox";
import Img from "next/image";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";
import { H1, H2, H3, H4 } from "../atoms/Heading";
import image from '../../public/images/4354885.svg'

const TechnicalSkills = (_props: any) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingLeft>
        <SectionBox.ImageBox>
          <Image 
            src={image} 
            alt="Learning Ilustration" 
            // layout="responsive" 
            />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox>
          {/* <SectionBox.HeadingBox noArea> */}
            <H1>Technical Skills</H1>
          {/* </SectionBox.HeadingBox> */}
          <TechIcons.Container>
            <TechIcons.Title>Programming Languages</TechIcons.Title>
            <TechIcons.IconContainer>
              <TechIcons.Icon icon="JavaScript" />
              <TechIcons.Icon icon="TypeScript" />
              <TechIcons.Icon icon="Ruby" />
              <TechIcons.Icon icon="PHP" />
              <TechIcons.Icon icon="Java" />
            </TechIcons.IconContainer>
          </TechIcons.Container>

          <TechIcons.Container>
            <TechIcons.Title>Frontend</TechIcons.Title>
            <TechIcons.IconContainer>
              <TechIcons.Icon icon="HTML5" />
              <TechIcons.Icon icon="CSS" />
              <TechIcons.Icon icon="Haml" />
              <TechIcons.Icon icon="React" />
              <TechIcons.Icon icon="React Native" />
              <TechIcons.Icon icon="jQuery" />
              <TechIcons.Icon icon="Redux" />
            </TechIcons.IconContainer>
          </TechIcons.Container>

          <TechIcons.Container>
            <TechIcons.Title>Backend</TechIcons.Title>
            <TechIcons.IconContainer>
              <TechIcons.Icon icon="Ruby On Rails" />
              <TechIcons.Icon icon="NodeJS" />
              <TechIcons.Icon icon="NextJS" />
              <TechIcons.Icon icon="Nginx" />
            </TechIcons.IconContainer>
          </TechIcons.Container>

          <TechIcons.Container>
            <TechIcons.Title>Testing</TechIcons.Title>
            <TechIcons.IconContainer>
              <TechIcons.Icon icon="RSpec" />
              <TechIcons.Icon icon="Jest" />
              <TechIcons.Icon icon="Appium" />
              <TechIcons.Icon icon="Cypress.io" />
            </TechIcons.IconContainer>
          </TechIcons.Container>

          <TechIcons.Container>
            <TechIcons.Title>CI/CD &amp; Deployments</TechIcons.Title>
            <TechIcons.IconContainer>
              <TechIcons.Icon icon="Gitlab" />
              <TechIcons.Icon icon="GitHub" />
              <TechIcons.Icon icon="Docker" />
              <TechIcons.Icon icon="VM" />
              <TechIcons.Icon icon="Kubernetes" />
            </TechIcons.IconContainer>
          </TechIcons.Container>
        </SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  );
};

export default TechnicalSkills;
