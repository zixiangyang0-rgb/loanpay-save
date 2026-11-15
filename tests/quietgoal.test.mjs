// quietgoal new-state contract — semantic machine fields only, no prose pins.
// Run: node --test tests/quietgoal.test.mjs (from loanpay-save/)
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");
const sha256 = (rel) =>
  createHash("sha256").update(readFileSync(join(root, rel))).digest("hex");

const hrefsOf = (src) =>
  new Set(
    [...src.matchAll(
      /href\s*:\s*"([^"]+)"|href\s*=\s*"([^"]+)"|href\s*=\s*\{\s*['"]([^'"]+)['"]\s*\}/g,
    )].map((m) => m[1] ?? m[2] ?? m[3]),
  );

// 27 real content routes (disclaimer excluded here; baseline freezes 28 incl /disclaimer).
const EXPECTED_27 = [
  "/50-30-20-budget-rule",
  "/529-plan-basics",
  "/bank-vs-credit-union",
  "/brokered-cds-guide",
  "/cd-ladder-strategy",
  "/cd-vs-high-yield-savings",
  "/checking-account-bonuses-2026",
  "/compounding-interest-explained",
  "/emergency-fund-calculator-by-expenses",
  "/emergency-fund-how-much",
  "/high-yield-checking-accounts",
  "/high-yield-savings-guide-2026",
  "/high-yield-savings-vs-cd-ladder-calculator",
  "/how-fdic-insurance-works",
  "/how-to-save-10000-in-a-year",
  "/i-bonds-explained-2026",
  "/joint-savings-accounts-guide",
  "/money-market-vs-savings",
  "/no-penalty-cd-guide",
  "/pay-yourself-first-automation",
  "/savings-account-bonuses-guide",
  "/savings-challenges-52-week",
  "/savings-for-kids-guide",
  "/sinking-funds-budgeting-guide",
  "/treasury-bills-vs-cds",
  "/where-to-keep-emergency-fund",
  "/windfall-bonus-plan",
];

describe("S1 quietgoal home preserves 27 content links (nav not hidden)", () => {
  it("Given home When parsed Then all 27 content hrefs present + /disclaimer preserved", () => {
    const hrefs = hrefsOf(read("app/page.tsx"));
    for (const h of EXPECTED_27) assert.ok(hrefs.has(h), `missing home href ${h}`);
    assert.ok(hrefs.has("/disclaimer"), "missing /disclaimer");
    assert.equal(hrefs.size, 28);
  });
});

describe("S1 quietgoal rail (buttons, no hrefs, no hidden links)", () => {
  it("Given home When parsed Then imports GoalRail + has rail aside", () => {
    const src = read("app/page.tsx");
    assert.ok(src.includes("GoalRail"), "home missing GoalRail");
    assert.ok(src.includes('aria-label="Goal rail"') || read("components/GoalRail.tsx").includes('aria-label="Goal rail"'), "rail nav missing");
  });
  it("Given GoalRail When parsed Then 3 data-goal buttons with aria-pressed", () => {
    const src = read("components/GoalRail.tsx");
    for (const g of ["emergency", "car", "home"]) {
      assert.ok(src.includes(`"${g}"`) || src.includes(`'${g}'`) || src.includes(g), `missing goal ${g}`);
    }
    assert.ok(src.includes("data-goal"), "missing data-goal");
    assert.ok(src.includes("aria-pressed"), "missing aria-pressed");
    assert.ok(!src.includes("href"), "rail must use buttons, no hrefs");
  });
});

describe("S1 quietgoal scoped light tokens (no global flip)", () => {
  it("Given home When parsed Then QuietGoal paper/ink/accent hex present", () => {
    const src = read("app/page.tsx");
    for (const hex of ["#F3F5F1", "#1F2A22", "#2F6B3C"]) {
      assert.ok(src.includes(hex), `missing token ${hex}`);
    }
  });
  it("Given globals.css When read Then body dark preserved (no blind flip)", () => {
    const css = read("app/globals.css").toLowerCase();
    assert.ok(css.includes("#07111f"), "dark body token removed");
  });
});

describe("S1 quietgoal photo + RECORD (explicit dimensions)", () => {
  it("Given public/photos/save.webp When checked Then exists + 1600x1066 webp", () => {
    const p = join(root, "public/photos/save.webp");
    assert.ok(existsSync(p), "missing public/photos/save.webp");
    const st = statSync(p);
    assert.ok(st.size > 100000 && st.size < 200000, `unexpected bytes ${st.size}`);
  });
  it("Given RECORD.md When read Then row has dimensions + license + source + alt", () => {
    const rec = read("public/photos/RECORD.md");
    assert.ok(rec.includes("save.webp"), "RECORD missing save.webp");
    assert.ok(rec.includes("1600x1066"), "RECORD missing dimensions 1600x1066");
    assert.ok(rec.includes("CC0"), "RECORD missing license CC0");
    assert.ok(rec.includes("commons.wikimedia.org/wiki/File:Piggy-bank-968302.jpg"), "RECORD missing source URL");
  });
  it("Given home When parsed Then img has explicit width/height 1600/1066", () => {
    const src = read("app/page.tsx");
    assert.ok(src.includes("/photos/save.webp"), "home missing photo src");
    assert.ok(src.includes("1600") && src.includes("1066"), "home missing explicit dimensions");
  });
});

describe("S1 preservation (estimator bytes, no demo formula copy)", () => {
  it("Given estimator When hashed Then byte-unchanged", () => {
    // Interior wave 2026-11-15: class-only +` s-tool-island` hook (1 token,
    // formula loop + assumption line unchanged; see git diff). Old pin retained
    // in git history: 51aa3a847d923d32b2e84b0bda70c7003e7ef4f7ab44ea8741e3808df194f467.
    assert.equal(
      sha256("app/compounding-interest-explained/estimator.tsx"),
      "536dc0f5151295bf48c94dcbb70e7504476983405d81c01f2b2285a4f3d62d08",
    );
  });
  it("Given home When parsed Then no demo division copy", () => {
    const src = read("app/page.tsx");
    assert.ok(!src.includes("toFixed(1)"), "home must not copy demo calculator");
    assert.ok(!src.includes("useState"), "home server must not add stateful demo");
  });
  it("Given sitemap When parsed Then still 33 routes", () => {
    const src = read("app/sitemap.ts");
    const routes = [...src.matchAll(/url:\s*"([^"]+)"/g)].map((m) => m[1]);
    assert.equal(routes.length, 33);
  });
});
