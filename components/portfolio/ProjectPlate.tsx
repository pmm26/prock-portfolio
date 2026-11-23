import Image from "next/image";
import type { Project } from "@/data/portfolio";

export default function ProjectPlate({
  project,
  large = false,
  priority = false,
}: {
  project: Project;
  large?: boolean;
  priority?: boolean;
}) {
  const { file, alt } = project.image;
  return (
    <div className={`plate plate-${file}`}>
      <Image
        src={`/artwork/${file}.webp`}
        alt={alt}
        fill
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        sizes={
          large
            ? "(max-width: 1240px) 94vw, 1120px"
            : "(max-width: 700px) 94vw, (max-width: 1400px) 49vw, 650px"
        }
      />
      {file === "leavers" && (
        <span className="leavers-wordmark" aria-hidden="true">
          LEAVERS
          <br />
          HOODIES
        </span>
      )}
    </div>
  );
}
