import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AppContainer from "../components/atoms/AppContainer";
import SectionBox from "../components/molecules/SectionBox";
import Img from "next/image";
import Button from "../components/atoms/Button";
import TechIcons from "../components/molecules/TechIcons";

import Intro from "../components/organisms/Intro";
import TechnicalSkills from "../components/organisms/TechnicalSkills";
import Proficiency from "../components/organisms/Proficiency";

import ElitePortuguesa from "../components/organisms/projects/ElitePortuguesa";
import ERostering from "../components/organisms/projects/ERostering";
import MobileApp from "../components/organisms/projects/MobileApp";
import Portfolio from "../components/organisms/projects/Portfolio";

import WorkExperience from "../components/organisms/WorkExperience";
import Voluntering from "../components/organisms/Voluntering";
import Education from "../components/organisms/Education";

const Home: NextPage = () => {
  return (
    <AppContainer>
      {/* Intro */}
      <Intro />

      {/* Technical Skills */}
      <TechnicalSkills />
      {/* Proficiency */}
      <Proficiency />

      {/* Projects */}
      <ERostering/>
      <MobileApp />
      <Portfolio />
      <ElitePortuguesa />

      {/* Work Experience */}
      <WorkExperience />

      {/* Community Projects & Voluntering */}
      <Voluntering />

      {/* Education */}
      <Education />


    </AppContainer>
  );
};

export default Home;
