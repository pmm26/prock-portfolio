"use client";

import AppContainer from "@/components/atoms/AppContainer";
import Intro from "@/components/pageContents/Intro";
import TechnicalSkills from "@/components/pageContents/TechnicalSkills";
import Proficiency from "@/components/pageContents/Proficiency";
import WorkExperience from "@/components/pageContents/WorkExperience";
import Volunteering from "@/components/pageContents/Volunteering";
import Education from "@/components/pageContents/Education";
import Project from "@/components/pageContents/Project";
import Footer from "@/components/molecules/Footer";
import data from "@/data/data";

export default function Home() {
  return (
    <AppContainer>
      {/* Intro */}
      <Intro {...data.intro} />

      {/* Technical Skills */}
      <TechnicalSkills {...data.technicalSkills} />

      {/* Proficiency */}
      <Proficiency {...data.proficiency} />

      {/* Projects */}
      {data.projects.map((project, index) => (
        <Project key={project.heading} {...project} index={index} />
      ))}

      {/* Work Experience */}
      <WorkExperience {...data.workExperience} />

      {/* Community Projects & Voluntering */}
      <Volunteering {...data.volunteering} />

      {/* Education */}
      <Education
        {...{
          ...data.education,
          entries: data.education.entries.map((entry) => ({
            ...entry,
            image: {
              ...entry.image,
              width: Number(entry.image.width),
              height: Number(entry.image.height),
            },
          })),
        }}
      />

      <Footer />
    </AppContainer>
  );
}
