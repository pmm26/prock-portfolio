import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import SectionBox from "../molecules/SectionBox";
import Img from "next/image";
import Button from "../atoms/Button";
import TechIcons from "../molecules/TechIcons";

const TechnicalSkills = (_props: any) => {
  return (
    <SectionBox.WhiteSection>
      <SectionBox.Container headingLeft>
        <SectionBox.ImageBox>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/4354885.svg"
            loading="lazy"
            alt="Learning Ilustration"
            className="image-4"
          />
        </SectionBox.ImageBox>
        <SectionBox.InfoBox>
          <h1 className="heading-9">Technical Skills</h1>
          <TechIcons.Container>
            <TechIcons.Title>Programming Languages</TechIcons.Title>
            <TechIcons.IconContainer>
              <TechIcons.Icon srcFile="gitlab.png" alt="Gitlab" />
              <TechIcons.Icon srcFile="docker.png" alt="Docker" />
              <TechIcons.Icon srcFile="nextjs.png" alt="Next.JS" />
              <TechIcons.Icon srcFile="react.png" alt="React" />
              <TechIcons.Icon
                srcFile="styled-components.png"
                alt="Styled Components"
              />
            </TechIcons.IconContainer>
          </TechIcons.Container>

          <TechIcons.Container>
            <TechIcons.Title>Frontend</TechIcons.Title>
            <TechIcons.IconContainer>
              <TechIcons.Icon srcFile="gitlab.png" alt="Gitlab" />
              <TechIcons.Icon srcFile="docker.png" alt="Docker" />
              <TechIcons.Icon srcFile="nextjs.png" alt="Next.JS" />
              <TechIcons.Icon srcFile="react.png" alt="React" />
              <TechIcons.Icon
                srcFile="styled-components.png"
                alt="Styled Components"
              />
            </TechIcons.IconContainer>
          </TechIcons.Container>

          <TechIcons.Container>
            <TechIcons.Title>Backend</TechIcons.Title>
            <TechIcons.IconContainer>
              <TechIcons.Icon srcFile="gitlab.png" alt="Gitlab" />
              <TechIcons.Icon srcFile="docker.png" alt="Docker" />
              <TechIcons.Icon srcFile="nextjs.png" alt="Next.JS" />
              <TechIcons.Icon srcFile="react.png" alt="React" />
              <TechIcons.Icon
                srcFile="styled-components.png"
                alt="Styled Components"
              />
            </TechIcons.IconContainer>
          </TechIcons.Container>

          <TechIcons.Container>
            <TechIcons.Title>Testing</TechIcons.Title>
            <TechIcons.IconContainer>
              <TechIcons.Icon srcFile="gitlab.png" alt="Gitlab" />
              <TechIcons.Icon srcFile="docker.png" alt="Docker" />
              <TechIcons.Icon srcFile="nextjs.png" alt="Next.JS" />
              <TechIcons.Icon srcFile="react.png" alt="React" />
              <TechIcons.Icon
                srcFile="styled-components.png"
                alt="Styled Components"
              />
            </TechIcons.IconContainer>
          </TechIcons.Container>

          <TechIcons.Container>
            <TechIcons.Title>CI/CD & Deployments</TechIcons.Title>
            <TechIcons.IconContainer>
              <TechIcons.Icon srcFile="gitlab.png" alt="Gitlab" />
              <TechIcons.Icon srcFile="docker.png" alt="Docker" />
              <TechIcons.Icon srcFile="nextjs.png" alt="Next.JS" />
              <TechIcons.Icon srcFile="react.png" alt="React" />
              <TechIcons.Icon
                srcFile="styled-components.png"
                alt="Styled Components"
              />
            </TechIcons.IconContainer>
          </TechIcons.Container>


        </SectionBox.InfoBox>
      </SectionBox.Container>
    </SectionBox.WhiteSection>
  );
};

export default TechnicalSkills;
