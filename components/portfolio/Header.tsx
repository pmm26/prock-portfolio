"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import BrandLogo from "./BrandLogo";

const links = [
  { id: "work", title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "expertise", title: "Expertise" },
];

export default function Header() {
  const path = usePathname();
  const [active, setActive] = useState("");
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
        <Link className="brand" href="/#top" aria-label="prock.dev home">
          <BrandLogo compactOnMobile />
        </Link>
        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.id}
              aria-current={
                (path === "/" ? active === link.id : link.id === "work")
                  ? "location"
                  : undefined
              }
              href={"/#" + link.id}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <Link className="contact-link" href="/#contact">
          Get in touch <Icon name="upRight" size={14} />
        </Link>
      </div>
    </header>
  );
}
