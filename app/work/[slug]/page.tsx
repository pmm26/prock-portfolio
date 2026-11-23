import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, profile } from "@/data/portfolio";
import { Icon } from "@/components/portfolio/Icon";
import Contact from "@/components/portfolio/Contact";
import ProjectMeta from "@/components/portfolio/ProjectMeta";
import ProjectPlate from "@/components/portfolio/ProjectPlate";

type CaseProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
function findProject(slug: string) {
  return projects.find((project) => project.slug === slug) ?? notFound();
}
export async function generateMetadata({
  params,
}: CaseProps): Promise<Metadata> {
  const project = findProject((await params).slug);
  const url = profile.url + "/work/" + project.slug;
  const title = project.title + " — Pedro Roque";
  const images = [
    { url: "/artwork/" + project.image.file + ".webp", alt: project.image.alt },
  ];
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: project.summary,
      url,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.summary,
      images,
    },
  };
}
export default async function CasePage({ params }: CaseProps) {
  const project = findProject((await params).slug);
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  return (
    <>
      <main id="top" className="shell case" tabIndex={-1}>
        <Link href="/#work" className="back-link">
          <Icon name="back" size={16} /> Project index
        </Link>
        <header className="case-head">
          <ProjectMeta project={project} index={index} />
          <h1>
            {project.title}
            <span>.</span>
          </h1>
          <p>{project.summary}</p>
        </header>
        <figure className="case-figure">
          <ProjectPlate project={project} large priority />
          <figcaption>{project.image.caption}</figcaption>
        </figure>
        <div className="case-body">
          <aside>
            <div className="small-meta">Project context</div>
            <p>{project.context}</p>
            <div className="small-meta">Technologies</div>
            <ul className="tags">
              {project.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {project.links.length > 0 && (
              <>
                <div className="small-meta">Project links</div>
                <div className="case-links">
                  {project.links.map((l) => (
                    <a href={l.href} key={l.href}>
                      {l.label}
                      <Icon name="upRight" size={14} />
                    </a>
                  ))}
                </div>
              </>
            )}
          </aside>
          <div className="case-prose">
            <h2>The problem</h2>
            <p>{project.problem}</p>
            <h2>My contribution</h2>
            <p>{project.contribution}</p>
            <h2>Engineering decisions</h2>
            {project.decisions.map((d) => (
              <section key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </section>
            ))}
          </div>
        </div>
        <Link className="next-project" href={"/work/" + next.slug}>
          <div>
            <span className="small-meta">Next project</span>
            <h2>{next.title}</h2>
          </div>
          <Icon name="arrow" size={30} />
        </Link>
      </main>
      <Contact />
    </>
  );
}
