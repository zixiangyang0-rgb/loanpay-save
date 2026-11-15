import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Portable repo-relative reads: tests/discovery.test.mjs -> repo root.
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");

// Parse machine-consumed href fields/attributes only:
//   object form  href: "/slug"   (home cards)
//   JSX form     href="/slug"    (guide pages)
//   braced form  href={'/slug'}  (tolerated where used)
const hrefsOf = (src) =>
  new Set(
    [...src.matchAll(
      /href\s*:\s*"([^"]+)"|href\s*=\s*"([^"]+)"|href\s*=\s*\{\s*['"]([^'"]+)['"]\s*\}/g,
    )].map((m) => m[1] ?? m[2] ?? m[3]),
  );

const home = () => read("app/page.tsx");

describe("S1 home discovery cards (href fields)", () => {
  it('Given home When rendered Then links href "/emergency-fund-calculator-by-expenses"', () => {
    assert.ok(
      hrefsOf(home()).has("/emergency-fund-calculator-by-expenses"),
      "missing home card href /emergency-fund-calculator-by-expenses",
    );
  });
  it('Given home When rendered Then links href "/high-yield-savings-vs-cd-ladder-calculator"', () => {
    assert.ok(
      hrefsOf(home()).has("/high-yield-savings-vs-cd-ladder-calculator"),
      "missing home card href /high-yield-savings-vs-cd-ladder-calculator",
    );
  });
});

describe("S1 preserved home targets (no regression)", () => {
  for (const slug of [
    "/high-yield-savings-guide-2026",
    "/emergency-fund-how-much",
    "/cd-ladder-strategy",
  ]) {
    it(`Given home When rendered Then preserves href "${slug}"`, () => {
      assert.ok(hrefsOf(home()).has(slug), `missing preserved home target ${slug}`);
    });
  }
});

describe("S2/S3 parent guide body context links (href attributes)", () => {
  it('Given emergency-fund-how-much When read Then body links href "/emergency-fund-calculator-by-expenses"', () => {
    const src = read("app/emergency-fund-how-much/page.tsx");
    assert.ok(
      hrefsOf(src).has("/emergency-fund-calculator-by-expenses"),
      "missing parent href /emergency-fund-calculator-by-expenses",
    );
  });
  it('Given cd-ladder-strategy When read Then body links href "/high-yield-savings-vs-cd-ladder-calculator"', () => {
    const src = read("app/cd-ladder-strategy/page.tsx");
    assert.ok(
      hrefsOf(src).has("/high-yield-savings-vs-cd-ladder-calculator"),
      "missing parent href /high-yield-savings-vs-cd-ladder-calculator",
    );
  });
});
