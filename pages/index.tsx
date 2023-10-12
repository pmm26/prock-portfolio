import type { NextPage } from "next";
import AppContainer from "../components/atoms/AppContainer";

import Intro from "../components/pageContents/Intro";
import TechnicalSkills from "../components/pageContents/TechnicalSkills";
import Proficiency from "../components/pageContents/Proficiency";

import WorkExperience from "../components/pageContents/WorkExperience";
import Volunteering from "../components/pageContents/Volunteering";
import Education from "../components/pageContents/Education";
import Project from "../components/pageContents/Project";
import Footer from '../components/molecules/Footer'
import Head from 'next/head'

import data from '../data/data'

const Home = (props: {data: typeof data}) => { 
  return (
    <>
    <Head>
      <title>Pedro Roque - Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
   
    <AppContainer>
      {/* Intro */}
      <Intro {...props.data.intro}/>

      {/* Technical Skills */}
      <TechnicalSkills {...props.data.technicalSkills}/>
      {/* Proficiency */}
      <Proficiency {...props.data.proficiency}/>

      {/* Projects */}
      {props.data.projects.map((project, index) => (
        <Project key={project.heading} {...project} index={index} />
      ))}

      {/* Work Experience */}
      <WorkExperience {...props.data.workExperience}/>

      {/* Community Projects & Voluntering */}
      <Volunteering {...props.data.volunteering}/>

      {/* Education */}
      <Education {...props.data.education}/>

      <Footer />
    </AppContainer>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {data: data},
  }
}

export default Home;
