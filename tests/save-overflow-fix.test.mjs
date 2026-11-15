// save-overflow-fix regression — narrow-viewport containment for compounding interiors.
// Run: node --test tests/save-overflow-fix.test.mjs (from loanpay-save/)
// Coordinator evidence (NOT a standard-375 proof): .s-article present with
// document clientWidth 341 / scrollWidth 385 after requested 375 emulation.
// This test pins SOURCE containment invariants only; rendered PASS stays pending Ego15.
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");
const sha256 = (rel) =>
  createHash("sha256").update(readFileSync(join(root, rel))).digest("hex");

const blockOf = (css, sel) => {
  const i = css.indexOf(sel);
  if (i === -1) return "";
  const open = css.indexOf("{", i);
  const close = css.indexOf("}", open);
  return close === -1 ? "" : css.slice(open, close + 1);
};

describe("S2 edge: .s-article never exceeds narrow viewport (scoped only)", () => {
  it("Given globals.css When read Then .s-article caps width + shrinks + breaks long words", () => {
    const css = read("app/globals.css");
    const b = blockOf(css, ".s-article {");
    assert.ok(b.includes("max-width"), ".s-article missing max-width:100% cap");
    assert.ok(b.includes("100%"), ".s-article max-width must be 100%");
    assert.ok(b.includes("min-width"), ".s-article missing min-width:0 shrink gate");
    assert.ok(
      b.includes("overflow-wrap"),
      ".s-article missing overflow-wrap for long $/URL tokens",
    );
  });
  it("Given globals.css When read Then .s-article-body can shrink inside paper shell", () => {
    const css = read("app/globals.css");
    const b = blockOf(css, ".s-article-body {");
    assert.ok(b.includes("min-width"), ".s-article-body missing min-width:0");
  });
});

describe("S2 edge: 560px table stays inside focusable wrapper (no doc leak)", () => {
  it("Given globals.css When read Then .s-table-wrap contains via max/min + overflow-x:auto", () => {
    const css = read("app/globals.css");
    const b = blockOf(css, ".s-table-wrap {");
    assert.ok(/overflow-x:\s*auto/.test(b), ".s-table-wrap must keep overflow-x:auto");
    assert.ok(b.includes("max-width"), ".s-table-wrap missing max-width:100%");
    assert.ok(b.includes("min-width"), ".s-table-wrap missing min-width:0");
  });
  it("Given compounding page When read Then table keeps 560 floor + wrapper stays region", () => {
    const src = read("app/compounding-interest-explained/page.tsx");
    assert.ok(src.includes("s-table-wrap"), "missing s-table-wrap");
    assert.ok(src.includes("min-w-[560px]"), "table 560 floor altered");
    assert.ok(src.includes('role="region"'), "table region role altered");
    assert.ok(src.includes("tabIndex={0}"), "table tabIndex altered");
  });
});

describe("S2 edge: estimator island contained without formula change", () => {
  it("Given globals.css When read Then .s-tool-island caps width + shrinks", () => {
    const css = read("app/globals.css");
    const b = blockOf(css, ".s-article .s-tool-island {");
    assert.ok(b.includes("max-width"), ".s-tool-island missing max-width:100%");
    assert.ok(b.includes("min-width"), ".s-tool-island missing min-width:0");
  });
  it("Given estimator When hashed Then bytes unchanged (loop + assumption intact)", () => {
    assert.equal(
      sha256("app/compounding-interest-explained/estimator.tsx"),
      "536dc0f5151295bf48c94dcbb70e7504476983405d81c01f2b2285a4f3d62d08",
    );
    const src = read("app/compounding-interest-explained/estimator.tsx");
    assert.ok(src.includes("balance * (1 + r) + monthly"), "loop altered");
    assert.ok(src.includes("Illustrative education only"), "assumption altered");
  });
});

describe("S3 adjacent: no global clip added, no typography shrink, metadata intact", () => {
  it("Given globals.css When read Then doc overflow rules still html+body only (2)", () => {
    const css = read("app/globals.css");
    const clips = css.match(/overflow-x:\s*clip/g) ?? [];
    assert.equal(clips.length, 2, `doc overflow changed: ${clips.length} (want 2)`);
  });
  it("Given globals.css When read Then title stays 28px (no shrink-all-type fix)", () => {
    const css = read("app/globals.css");
    const b = blockOf(css, ".s-article-title {");
    assert.ok(b.includes("28px"), "title 28px altered (forbidden shrink)");
  });
  it("Given compounding page When read Then canonical + disclaimer + AdSlot intact", () => {
    const src = read("app/compounding-interest-explained/page.tsx");
    assert.ok(
      src.includes("https://save.loanpaylogic.com/compounding-interest-explained"),
      "canonical altered",
    );
    assert.ok(src.includes("/disclaimer"), "disclaimer link altered");
    assert.ok(src.includes("AdSlot"), "AdSlot altered");
  });
});
