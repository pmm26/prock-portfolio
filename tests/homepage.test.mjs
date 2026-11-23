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
  const links = Array.from(
    page.matchAll(/<a\b[^>]*\bhref="(\/work\/[a-z0-9-]+)"/g),
    (match) => match[1],
  );
  assert.ok(links.length > 0, "expected at least one project in the index");
  for (const href of new Set(links)) {
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
