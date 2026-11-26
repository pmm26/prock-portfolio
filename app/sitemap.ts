import type { MetadataRoute } from "next";
import { profile, projects } from "@/data/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.url },
    ...projects.map(({ slug }) => ({ url: profile.url + "/work/" + slug })),
  ];
}
