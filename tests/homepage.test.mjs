import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(
  new URL("../.next/server/app/index.html", import.meta.url),
  "utf8",
);

test("the production homepage identifies Pedro Roque", () => {
  assert.match(page, /<h1\b[^>]*>Pedro Roque<\/h1>/);
});

test("the CV download links to a bundled PDF", async () => {
  const link = page.match(/<a\b[^>]*\bhref="(\/[^"]+\.pdf)"/i);
  assert.ok(link, "expected a local PDF link");
  const pdf = await readFile(new URL(`../public${link[1]}`, import.meta.url));
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
});

test("every project in the index has a static case page and a canonical URL", async () => {
  const index = page.match(
    /<section\b[^>]*\bid="work"[^>]*>([\s\S]*?)<\/section>/,
  )?.[1];
  assert.ok(index, "expected a project index section");
  const links = Array.from(
    index.matchAll(/<a\b[^>]*\bhref="(\/work\/[^"]+)"/g),
    (match) => match[1],
  );
  assert.deepEqual(links.toSorted(), [
    "/work/elite-portuguesa",
    "/work/leavers-hoodies",
    "/work/personal-portfolio",
    "/work/sard-erostering",
    "/work/sard-mobile",
  ]);
  for (const href of links) {
    const detail = await readFile(
      new URL(`../.next/server/app${href}.html`, import.meta.url),
      "utf8",
    );
    assert.ok(
      detail.includes(`rel="canonical" href="https://prock.dev${href}"`),
      href,
    );
    assert.match(detail, /<h2>My contribution<\/h2>/);
  }
});

test("the not-found page has a focusable skip-link destination", async () => {
  const missing = await readFile(
    new URL("../.next/server/app/_not-found.html", import.meta.url),
    "utf8",
  );
  assert.match(missing, /<a\b[^>]*href="#top"[^>]*>Skip to content<\/a>/);
  assert.match(
    missing,
    /<main\b(?=[^>]*\bid="top")(?=[^>]*\btabindex="-1")[^>]*>/i,
  );
});
