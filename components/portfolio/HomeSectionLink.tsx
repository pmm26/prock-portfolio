import type { ComponentPropsWithoutRef } from "react";

type Props = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  section: "top" | "work" | "experience" | "expertise" | "contact";
  onHomepage?: boolean;
};

// Native fragment navigation places keyboard focus at the target section.
export default function HomeSectionLink({
  section,
  onHomepage,
  ...props
}: Props) {
  return <a href={`${onHomepage ? "" : "/"}#${section}`} {...props} />;
}
