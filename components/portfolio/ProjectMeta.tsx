import type { Project } from "@/data/portfolio";

export default function ProjectMeta({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="project-meta">
      <span>
        <span className="section-index">
          {String(index + 1).padStart(2, "0")}
        </span>{" "}
        / {project.category}
      </span>
      {project.era && <span className="project-era">{project.era}</span>}
    </div>
  );
}
