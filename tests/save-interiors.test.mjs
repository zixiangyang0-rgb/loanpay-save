// save-interiors structural contract — QuietGoal reading shell opt-in for 27 content interiors.
// Run: node --test tests/save-interiors.test.mjs (from loanpay-save/)
// Machine fields only: file/class presence, href-set sizes, formula-text presence, LOC/any/dep gates.
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");
const exists = (rel) => existsSync(join(root, rel));

const EXPECTED_27 = [
  "50-30-20-budget-rule",
  "529-plan-basics",
  "bank-vs-credit-union",
  "brokered-cds-guide",
  "cd-ladder-strategy",
  "cd-vs-high-yield-savings",
  "checking-account-bonuses-2026",
  "compounding-interest-explained",
  "emergency-fund-calculator-by-expenses",
  "emergency-fund-how-much",
  "high-yield-checking-accounts",
  "high-yield-savings-guide-2026",
  "high-yield-savings-vs-cd-ladder-calculator",
  "how-fdic-insurance-works",
  "how-to-save-10000-in-a-year",
  "i-bonds-explained-2026",
  "joint-savings-accounts-guide",
  "money-market-vs-savings",
  "no-penalty-cd-guide",
  "pay-yourself-first-automation",
  "savings-account-bonuses-guide",
  "savings-challenges-52-week",
  "savings-for-kids-guide",
  "sinking-funds-budgeting-guide",
  "treasury-bills-vs-cds",
  "where-to-keep-emergency-fund",
  "windfall-bonus-plan",
];

const LEGAL_5 = ["about", "contact", "disclaimer", "privacy-policy", "terms"];

const hrefsOf = (src) =>
  new Set(
    [...src.matchAll(
      /href\s*:\s*"([^"]+)"|href\s*=\s*"([^"]+)"|href\s*=\s*\{\s*['"]([^'"]+)['"]\s*\}/g,
    )].map((m) => m[1] ?? m[2] ?? m[3]),
  );

const pureLoc = (src) =>
  src.split("\n").filter((l) => {
    const t = l.trim();
    return t !== "" && !t.startsWith("//") && !t.startsWith("#") && !t.startsWith("--");
  }).length;

describe("S1 happy: SaveShell exists with size/dep gates", () => {
  it("Given components/SaveShell.tsx When read Then opt-in wrapper present", () => {
    assert.ok(exists("components/SaveShell.tsx"), "missing components/SaveShell.tsx");
    const src = read("components/SaveShell.tsx");
    assert.ok(src.includes("s-article"), "SaveShell must render s-article hook");
    assert.ok(src.includes("children"), "SaveShell must render children");
  });
  it("Given SaveShell When measured Then <=250 pure LOC, no any, no new deps", () => {
    const src = read("components/SaveShell.tsx");
    assert.ok(pureLoc(src) <= 250, `SaveShell too large: ${pureLoc(src)} pure LOC`);
    assert.ok(!src.includes("any"), "SaveShell must not use any");
    assert.ok(!src.includes("framer-motion") && !src.includes("recharts"), "SaveShell must add no deps");
  });
});

describe("S1 happy: 27 interiors opt into QuietGoal shell", () => {
  it("Given 27 content pages When read Then each imports SaveShell", () => {
    for (const slug of EXPECTED_27) {
      const src = read(`app/${slug}/page.tsx`);
      assert.ok(src.includes("SaveShell"), `${slug} missing SaveShell opt-in`);
    }
  });
  it("Given 27 content pages When read Then hero/title/lede hooks migrated, amber kicker gone", () => {
    for (const slug of EXPECTED_27) {
      const src = read(`app/${slug}/page.tsx`);
      assert.ok(src.includes("s-article-hero"), `${slug} missing s-article-hero`);
      assert.ok(src.includes("s-article-title"), `${slug} missing s-article-title`);
      assert.ok(src.includes("s-article-lede"), `${slug} missing s-article-lede`);
      assert.ok(src.includes("s-article-body"), `${slug} missing s-article-body`);
      assert.ok(!src.includes("text-amber-200/70"), `${slug} still has dark amber kicker`);
    }
  });
  it("Given globals.css When read Then QuietGoal scoped tokens present, body dark preserved", () => {
    const css = read("app/globals.css");
    for (const hook of [".s-article-hero", ".s-article-kicker", ".s-article-title", ".s-article-lede", ".s-article-body", ".s-article-faq", ".s-article-related", ".s-table-wrap", ".s-tool-island"]) {
      assert.ok(css.includes(hook), `globals.css missing ${hook}`);
    }
    assert.ok(css.includes("#F3F5F1"), "scoped paper token #F3F5F1 missing");
    const bodyBlock = (css.match(/body\s*\{[^}]*\}/s) ?? [""])[0];
    assert.ok(!bodyBlock.includes("#F3F5F1"), "body must not be flipped to paper");
    assert.ok(css.toLowerCase().includes("#07111f"), "dark body token removed");
  });
});

describe("S1 happy: estimator island exempt (dark, formula intact)", () => {
  it("Given estimator When read Then dark island class + loop + assumption line intact", () => {
    const src = read("app/compounding-interest-explained/estimator.tsx");
    assert.ok(src.includes("s-tool-island"), "estimator missing s-tool-island exemption");
    assert.ok(src.includes("balance * (1 + r) + monthly"), "monthly-compounding loop altered");
    assert.ok(src.includes("Illustrative education only"), "assumption line altered");
  });
  it("Given 2 static calculator pages When read Then still input-free articles", () => {
    for (const slug of ["emergency-fund-calculator-by-expenses", "high-yield-savings-vs-cd-ladder-calculator"]) {
      const src = read(`app/${slug}/page.tsx`);
      assert.ok(!src.includes("useState"), `${slug} must not gain stateful demo`);
      assert.ok(!src.includes("<input"), `${slug} must not gain inputs`);
      assert.ok(!src.includes("<form"), `${slug} must not gain forms`);
    }
  });
});

describe("S2 edge: labeled focusable table containment per page", () => {
  it("Given 27 content pages When read Then each table wrapper is s-table-wrap region with tabIndex", () => {
    for (const slug of EXPECTED_27) {
      const src = read(`app/${slug}/page.tsx`);
      assert.ok(src.includes("s-table-wrap"), `${slug} missing s-table-wrap`);
      assert.ok(src.includes('role="region"'), `${slug} table wrapper missing role=region`);
      assert.ok(src.includes("tabIndex={0}"), `${slug} table wrapper missing tabIndex`);
      assert.ok(src.includes("aria-label"), `${slug} table wrapper missing aria-label`);
    }
  });
  it("Given globals.css When read Then narrow containment only, no doc overflow change", () => {
    const css = read("app/globals.css");
    assert.ok(css.includes(".s-table-wrap"), "missing .s-table-wrap rule");
    assert.ok(/\.s-table-wrap[^}]*overflow-x:\s*auto/s.test(css), ".s-table-wrap must contain via overflow-x:auto");
    const clips = css.match(/overflow-x:\s*clip/g) ?? [];
    assert.equal(clips.length, 2, `doc overflow changed: ${clips.length} clip rules (want html+body only)`);
  });
});

describe("S3 adjacent: links/metadata/consent/schema/home preserved", () => {
  it("Given home When parsed Then 28 href set + GoalRail intact", () => {
    const hrefs = hrefsOf(read("app/page.tsx"));
    assert.equal(hrefs.size, 28, `home href set changed: ${hrefs.size}`);
    assert.ok(hrefs.has("/disclaimer"), "home missing /disclaimer");
    for (const h of ["/emergency-fund-calculator-by-expenses", "/high-yield-savings-vs-cd-ladder-calculator"]) {
      assert.ok(hrefs.has(h), `home missing ${h}`);
    }
    assert.ok(read("app/page.tsx").includes("GoalRail"), "home GoalRail regressed");
  });
  it("Given layout When parsed Then 6 internal + 4 network hrefs intact", () => {
    const hrefs = hrefsOf(read("app/layout.tsx"));
    for (const h of ["/", "/about", "/contact", "/privacy-policy", "/terms", "/disclaimer"]) {
      assert.ok(hrefs.has(h), `layout missing ${h}`);
    }
    for (const h of ["https://loanpaylogic.com", "https://retire.loanpaylogic.com", "https://credit.loanpaylogic.com", "https://tax.loanpaylogic.com"]) {
      assert.ok(hrefs.has(h), `layout missing network ${h}`);
    }
  });
  it("Given sitemap/canonicals When parsed Then 33 routes + 29 canonicals + 4-gap frozen", () => {
    const sm = read("app/sitemap.ts");
    const routes = [...sm.matchAll(/url:\s*"([^"]+)"/g)].map((m) => m[1]);
    assert.equal(routes.length, 33, `sitemap changed: ${routes.length}`);
    let canonicals = 0;
    for (const slug of [...EXPECTED_27, ...LEGAL_5]) {
      const src = read(`app/${slug}/page.tsx`);
      if (src.includes("save.loanpaylogic.com/")) canonicals += 1;
    }
    if (read("app/page.tsx").includes("save.loanpaylogic.com/")) canonicals += 1; // home canonical
    assert.equal(canonicals, 29, `canonical count changed: ${canonicals}`);
  });
  it("Given consent/ads/schema When read Then choice + slots + ld sources intact", () => {
    const consent = read("lib/consent.tsx");
    assert.ok(consent.includes("loanpay-save-consent"), "consent key changed");
    assert.ok(consent.includes("npu") || consent.includes("npa=1") || consent.includes("npa"), "consent declined=npa behavior changed");
    for (const slug of EXPECTED_27) {
      const src = read(`app/${slug}/page.tsx`);
      assert.ok(src.includes("AdSlot"), `${slug} AdSlot removed`);
      assert.ok(src.includes("ArticleJsonLd"), `${slug} ArticleJsonLd removed`);
      assert.ok(src.includes("/disclaimer"), `${slug} disclaimer link removed`);
    }
  });
  it("Given 5 legal pages When read Then untouched by interior shell", () => {
    for (const slug of LEGAL_5) {
      const src = read(`app/${slug}/page.tsx`);
      assert.ok(!src.includes("SaveShell"), `${slug} must stay out of interior scope`);
      assert.ok(!src.includes("s-article"), `${slug} must not gain interior hooks`);
    }
  });
});
