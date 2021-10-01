import type { NextPage } from "next";
import AppContainer from "../components/atoms/AppContainer";

import Intro from "../components/pageContents/Intro";
import TechnicalSkills from "../components/pageContents/TechnicalSkills";
import Proficiency from "../components/pageContents/Proficiency";

import ElitePortuguesa from "../components/pageContents/projects/ElitePortuguesa";
import ERostering from "../components/pageContents/projects/ERostering";
import MobileApp from "../components/pageContents/projects/MobileApp";
import Portfolio from "../components/pageContents/projects/Portfolio";

import WorkExperience from "../components/pageContents/WorkExperience";
import Volunteering from "../components/pageContents/Volunteering";
import Education from "../components/pageContents/Education";

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
      <Volunteering />

      {/* Education */}
      <Education />


    </AppContainer>
  );
};

export default Home;
