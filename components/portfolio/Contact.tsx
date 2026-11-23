import Link from "next/link";
import { profile } from "@/data/portfolio";
import { Icon } from "./Icon";
import BrandLogo from "./BrandLogo";
export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="shell contact-body">
          <div className="eyebrow">
            <span className="rule" /> Contact
          </div>
          <div className="contact-main">
            <div>
              <h2>
                Get in touch<span>.</span>
              </h2>
              <a className="email" href={"mailto:" + profile.email}>
                {profile.email} <Icon name="upRight" size={24} />
              </a>
            </div>
            <div className="contact-resources">
              <a href={profile.gitlab}>
                <Icon name="gitlab" /> GitLab <Icon name="upRight" size={15} />
              </a>
              <a href={profile.cv} download>
                <Icon name="download" /> Download CV <span>PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="shell footer-inner">
          <Link href="/#top" className="brand" aria-label="prock.dev home">
            <BrandLogo />
          </Link>
          <span>© 2026 Pedro Roque</span>
          <a href="#top">
            Back to top <Icon name="up" size={14} />
          </a>
        </div>
      </footer>
    </>
  );
}
