"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import BrandLogo from "./BrandLogo";
import HomeSectionLink from "./HomeSectionLink";

const links = [
  { id: "work", title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "expertise", title: "Expertise" },
] as const;

export default function Header({ casePaths }: { casePaths: string[] }) {
  const path = usePathname();
  const isHome = path === "/";
  const [active, setActive] = useState("");
  const activeSection = isHome ? active : casePaths.includes(path) && "work";
  useEffect(() => {
    if (path !== "/") return;
    const sections = [
      "top",
      ...links.map((link) => link.id),
      "background",
      "contact",
    ]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    let frame = 0;
    function update() {
      const boundary = Math.min(window.innerHeight * 0.4, 220);
      const current = sections
        .filter((el) => el.getBoundingClientRect().top <= boundary)
        .pop();
      setActive(current?.id ?? "");
      frame = 0;
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [path]);
  return (
    <header className="header">
      <div className="shell header-inner">
        <HomeSectionLink
          className="brand"
          section="top"
          onHomepage={isHome}
          aria-label="prock.dev home"
        >
          <BrandLogo compactOnMobile />
        </HomeSectionLink>
        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <HomeSectionLink
              key={link.id}
              aria-current={activeSection === link.id ? "location" : undefined}
              section={link.id}
              onHomepage={isHome}
            >
              {link.title}
            </HomeSectionLink>
          ))}
        </nav>
        <HomeSectionLink
          className="contact-link"
          section="contact"
          onHomepage={isHome}
        >
          Get in touch <Icon name="upRight" size={14} />
        </HomeSectionLink>
      </div>
    </header>
  );
}
