import { Icon } from "@/components/portfolio/Icon";
import HomeSectionLink from "@/components/portfolio/HomeSectionLink";

export default function NotFound() {
  return (
    <main id="top" className="shell case" tabIndex={-1}>
      <header className="case-head">
        <div className="eyebrow">404</div>
        <h1>
          Page not found<span>.</span>
        </h1>
      </header>
      <HomeSectionLink section="work" className="back-link">
        <Icon name="back" size={16} /> Back to projects
      </HomeSectionLink>
    </main>
  );
}
