import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { DOMParser, parseHTML } from "linkedom";

const build = new URL("../.next/server/app/", import.meta.url);
const site = "https://prock.dev";

async function readPage(path) {
  const file = new URL(`.${path}.html`, build);
  return parseHTML(await readFile(file, "utf8")).document;
}

const home = await readPage("/index");
const projectPaths = Array.from(
  home.querySelectorAll('#work a[href^="/work/"]'),
  (link) => link.getAttribute("href"),
);

test("the production homepage identifies Pedro Roque", () => {
  assert.equal(home.querySelector("h1")?.textContent, "Pedro Roque");
});

test("the CV download links to a bundled PDF", async () => {
  const link = home.querySelector('a[download][href^="/"][href$=".pdf"]');
  assert.ok(link, "expected a local PDF download");
  const pdf = await readFile(
    new URL(`../public${link.getAttribute("href")}`, import.meta.url),
  );
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
});

test("every project in the index has a static case page and a canonical URL", async () => {
  assert.deepEqual(projectPaths.toSorted(), [
    "/work/elite-portuguesa",
    "/work/leavers-hoodies",
    "/work/personal-portfolio",
    "/work/sard-erostering",
    "/work/sard-mobile",
  ]);
  for (const path of projectPaths) {
    const detail = await readPage(path);
    assert.equal(
      detail.querySelector('link[rel="canonical"]')?.getAttribute("href"),
      `${site}${path}`,
    );
    assert.ok(
      [...detail.querySelectorAll("h2")].some(
        (heading) => heading.textContent === "My contribution",
      ),
      path,
    );
  }
});

test("Next project follows the homepage index and wraps from the last project to the first", async () => {
  assert.ok(projectPaths.length, "expected projects in the homepage index");
  for (const [index, path] of projectPaths.entries()) {
    const detail = await readPage(path);
    const next = [...detail.querySelectorAll("main a")].find((link) =>
      link.textContent.includes("Next project"),
    );
    assert.equal(
      next?.getAttribute("href"),
      projectPaths[(index + 1) % projectPaths.length],
      `Next project on ${path}`,
    );
  }
});

test("primary navigation leads to focusable homepage sections from the homepage and every case study", async () => {
  const sections = ["work", "experience", "expertise"];
  for (const section of sections) {
    assert.equal(
      home.getElementById(section)?.getAttribute("tabindex"),
      "-1",
      `focus target #${section}`,
    );
  }
  for (const path of ["/", ...projectPaths]) {
    const page = path === "/" ? home : await readPage(path);
    const links = [
      ...page.querySelectorAll('nav[aria-label="Primary navigation"] a'),
    ];
    for (const section of sections) {
      const link = links.find(
        (item) => item.textContent.trim().toLowerCase() === section,
      );
      const href = link?.getAttribute("href");
      assert.ok(href, `missing ${section} link on ${path}`);
      assert.equal(
        new URL(href, new URL(path, site)).href,
        `${site}/#${section}`,
        `${section} link on ${path}`,
      );
    }
  }
});

test("robots.txt advertises the sitemap and the sitemap lists the homepage and every indexed project exactly once", async () => {
  const robots = await readFile(new URL("robots.txt.body", build), "utf8");
  const sitemapUrl = robots.match(/^Sitemap:\s*(\S+)\s*$/im)?.[1];
  assert.equal(sitemapUrl, `${site}/sitemap.xml`);

  const xml = await readFile(new URL("sitemap.xml.body", build), "utf8");
  const sitemap = new DOMParser().parseFromString(xml, "text/xml");
  const urls = Array.from(
    sitemap.querySelectorAll("urlset > url > loc"),
    (loc) => new URL(loc.textContent.trim()).href,
  );
  assert.deepEqual(
    urls.toSorted(),
    ["/", ...projectPaths].map((path) => new URL(path, site).href).toSorted(),
  );
});

test("the not-found page has a focusable skip-link destination", async () => {
  const missing = await readPage("/_not-found");
  assert.equal(
    missing.querySelector('a[href="#top"]')?.textContent,
    "Skip to content",
  );
  assert.ok(missing.querySelector('main#top[tabindex="-1"]'));
});
