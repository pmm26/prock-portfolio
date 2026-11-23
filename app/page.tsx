import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/portfolio/Contact";
import { Icon } from "@/components/portfolio/Icon";
import ProjectMeta from "@/components/portfolio/ProjectMeta";
import ProjectPlate from "@/components/portfolio/ProjectPlate";
import {
  background,
  coreStack,
  experience,
  expertise,
  profile,
  projects,
} from "@/data/portfolio";

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="eyebrow">
      <span className="section-index">/{index}</span>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero shell" aria-labelledby="intro-title">
      <div className="hero-copy">
        <div className="eyebrow hero-kicker">
          <span className="rule" />
          Engineering portfolio
        </div>
        <h1 id="intro-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}.</p>
        <p className="hero-desc">{profile.introduction}</p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            Explore projects <Icon name="down" size={16} />
          </a>
          <a className="button secondary" href={profile.cv} download>
            Download CV <Icon name="download" size={16} />
          </a>
        </div>
        <div className="hero-links">
          <a href={profile.gitlab}>
            <Icon name="gitlab" size={17} />
            GitLab
            <Icon name="upRight" size={12} />
          </a>
          <span />
          <a href="#experience">
            View experience
            <Icon name="down" size={12} />
          </a>
        </div>
      </div>
      <figure className="coding-desk">
        <Image
          src="/artwork/coding-desk-colour.webp"
          width={1320}
          height={990}
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, (max-width: 1500px) 46vw, 678px"
          alt="Ink illustration of a developer typing at a desk, with TypeScript code, a test run and a roster preview on the monitor."
        />
        <figcaption>
          <span>Fig. 01</span>
          <Link href="/work/sard-erostering">
            Inspired by SARD eRostering <Icon name="arrow" size={13} />
          </Link>
        </figcaption>
      </figure>
    </section>
  );
}

function CoreStack() {
  return (
    <section
      id="core-stack"
      className="shell core-stack"
      aria-labelledby="stack-title"
    >
      <h2 id="stack-title">
        Core stack<span aria-hidden="true">.</span>
      </h2>
      <dl className="stack-groups">
        {coreStack.map(({ area, icon, tools, detail }) => (
          <div key={area} className="stack-group">
            <dt>
              <Icon name={icon} size={19} />
              {area}
            </dt>
            <dd>
              <p className="stack-tools">{tools.join(" & ")}</p>
              <p className="stack-detail">{detail}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <main id="top" tabIndex={-1}>
        <Hero />
        <CoreStack />
        <section
          id="work"
          tabIndex={-1}
          className="shell section work-section"
          aria-labelledby="work-title"
        >
          <SectionLabel index="01">Project index</SectionLabel>
          <div className="section-heading">
            <h2 id="work-title">
              Selected work<span>.</span>
            </h2>
            <span className="small-meta">
              ({String(projects.length).padStart(2, "0")} projects)
            </span>
          </div>
          <div className="work-grid">
            {projects.map((project, i) => (
              <Link
                href={"/work/" + project.slug}
                className={"project-card " + (i < 2 ? "featured" : "compact")}
                key={project.slug}
              >
                <ProjectPlate project={project} />
                <ProjectMeta project={project} index={i} />
                <div className="project-title">
                  <h3>{project.title}</h3>
                  <Icon name="upRight" size={21} />
                </div>
                <p>{project.summary}</p>
              </Link>
            ))}
          </div>
        </section>
        <section
          id="experience"
          tabIndex={-1}
          className="paper section"
          aria-labelledby="experience-title"
        >
          <div className="shell">
            <header className="experience-heading">
              <SectionLabel index="02">Career</SectionLabel>
              <h2 id="experience-title">
                Experience<span>.</span>
              </h2>
            </header>
            <div className="timeline">
              {experience.map((job) => (
                <article key={job.company} className="job">
                  <div className="job-identity">
                    <Image
                      src={job.logo}
                      alt=""
                      width={52}
                      height={52}
                      className="job-logo"
                    />
                    <div>
                      <h3>
                        <a href={job.href}>
                          {job.company} <Icon name="upRight" size={16} />
                        </a>
                      </h3>
                      <p className="job-role">{job.role}</p>
                    </div>
                  </div>
                  <div className="job-meta">
                    <p className="small-meta">{job.dates}</p>
                    <p>{job.location}</p>
                  </div>
                  <div className="job-overview">
                    <p>{job.summary}</p>
                    <details>
                      <summary>
                        Role details <Icon name="plus" size={15} />
                      </summary>
                      <ul>
                        {job.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="expertise"
          tabIndex={-1}
          className="shell section expertise-section"
          aria-labelledby="expertise-title"
        >
          <SectionLabel index="03">Engineering approach</SectionLabel>
          <div className="expertise-intro">
            <h2 id="expertise-title">
              Expertise<span>.</span>
            </h2>
            <p>
              I started by running Linux servers for a gaming community. That
              still shapes how I build software. I think about who will use it,
              how the pieces fit together, and who will look after it once it’s
              running.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map((area) => (
              <article id={area.id} key={area.id} className="expertise-item">
                <span className="discipline-icon" aria-hidden="true">
                  {area.mark}
                </span>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
                <span className="tools-line">{area.tools}</span>
              </article>
            ))}
          </div>
        </section>
        <section id="background" className="background-section section">
          <div className="shell">
            <SectionLabel index="04">Background</SectionLabel>
            <div className="background-grid">
              {background.map((group) => (
                <div key={group.category}>
                  <h2>
                    {group.category}
                    <span>.</span>
                  </h2>
                  {group.entries.map((entry) => (
                    <article key={entry.title}>
                      <p className="small-meta">{entry.date}</p>
                      <h3>{entry.title}</h3>
                      <p>{entry.text}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
}
