# loanpay-save DESIGN.md — codifies network contract before code
Sole writer: save visual owner. Read-only codification of `.omo/upgrade-20261115/DESIGN.md` + `CONTRACT.md` + `AUDIT-SYNTHESIS.md`. No product edits in this file. Showcase-before-product binding.

## Tokens: surface/ink/accent/line (hex + usage caps)
- Surface (dark navy-green, permitted per network contract §3): `bg #0B1A13`, `panel #0E2118`, `input #10271C`.
- Ink/text: `ivory #F7F4EE` body on dark; `muted #A8BBAE` secondary (decorative/meta only, never for primary result text).
- Accent (links/focus/active ONLY, max 10% pixels): leaf-tinted light accent `#9CC7A5` (text-safe on dark). Base leaf `#4F7A3A` reserved for ivory-surface contexts only. Brass/gold NOT used here — save identity is sage, not gold.
- Line: `rgba(247,244,238,.13)` on dark; ivory insert line `#D8DCCF`.
- Ivory scoped pieces (only): comparison-table insert + figure box, `bg #F7F4EE`, `ink #1E2A22`, `error #B42318` on ivory. No blanket light conversion; ToolIsland stays dark contrast-tested island.
- Error: dark surface `#FFB4A8` text; ivory surface `#B42318` text. Disabled: `opacity .55 + cursor not-allowed`, never color-only.
- Contrast pairs verified (author-checked, not measured-PASS claim): `#F7F4EE` on `#0B1A13` body; `#9CC7A5` on `#0B1A13` links/focus; `#B42318` on `#F7F4EE` ivory error; `#1E2A22` on `#F7F4EE` ivory body. Full 4.5:1 / 3:1 re-test deferred to harness approval with real screenshots.

## Type: serif display / system body / tabular-nums
- Display: `Georgia, "Times New Roman", "Source Serif 4", serif`, tracking `-0.01em`, weights 600–700.
- Body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`, 1.6–1.75; tool labels 1.4.
- Numeric hierarchy (binding): result figures `font-variant-numeric: tabular-nums`, stepped 28/22/16 primary/secondary/meta, never gradient-filled. Eyebrow labels 12–13px uppercase `0.08em` only.
- Mono: `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` for code labels only.
- Zero new runtime/font dependencies.

## Primitives map: local classes → 8 network primitives + states
1. `SiteHeader` → `.sitehead` + `.wordmark.serif` + `.nav-inline` / `.hamb` + `.nav-panel` (in-flow, pushes content, `aria-expanded`, never overlays inputs). States: default / hover (underline offset 3px) / focus-visible ring `2px #9CC7A5 + 2px offset` / expanded.
2. `SiteFooter` → `footer#footer` + network interlink row + disclaimer. No sticky behavior.
3. `HomeHero` → `#hero .hero` split text 55% / ivory figure 45%, max-height 420/300/220, 1 primary CTA + 1 secondary link, no inputs inside. Longest-title stress string wraps ≤3 lines at 375px.
4. `ToolIsland` → `#tool .island` + `#demof` + `#ledger`. DEMO contribution illustrator (monthly × months = total contributions arithmetic, NOT a bank quote, NOT APY). States: default / hover (darken 8%) / focus-visible / error (ruby message + `aria-describedby`, value preserved) / disabled / calculating (`aria-busy` + skeleton in result area only) / reduced-motion (instant swap).
5. `LedgerTable` → `#table .tscroll > table`, sticky first column on mobile scroll, header ivory-on-dark, row hover wash only.
6. `Figure` → `#fig .figbox` ivory placeholder. NO photo inserted: requires source page + creator + license + local AVIF/WebP ×3 + `public/photos/RECORD.md` row before any insertion. Topic-true only when verified (bank-hall detail, no staff/client faces).
7. `GuideCard` → `#cards .grid3 > .gcard`, serif 2-line clamp + badge + SVG/→ arrow only, hover translateY(-2px) + shadow (none under reduced-motion).
8. `Disclosure/Consent` → `#consent .consent[role=dialog]` methodology + ad-choice + consent-state line, never in hero, never auto-dismissed, visible dialog semantics.

## Hero: verified photo record + max-height + scrim
- Photo: NONE inserted. Record row pending. Placeholder box states pending requirements explicitly.
- Max-height: 420px desktop / 300px tablet / 220px mobile, `object-fit cover` when real asset lands.
- Scrim: no text-over-photo until scrim-tested 4.5:1; current placeholder is ivory box with dark ink (no scrim needed).

## Responsive: 375/768/1280 notes + stress strings
- Container `max-w-5xl` (64rem) tool/guide; gutters 24 desktop / 16 mobile; section rhythm 64/40; island padding 24/16.
- 1280: hero split; LedgerTable full width; Guide grid 3-col; header inline nav.
- 768: hero stacks, media ≤300px; Guide 2-col; ToolIsland full width; condensed inline nav or hamburger.
- 375: single column; media ≤220px; Guide 1-col; LedgerTable horizontal scroll + sticky first col; hamburger + in-flow panel; no new fixed bottom bar; consent visible-dialog, no overlap; no document overflow.
- Longest-title stress: "Understanding Emergency Funds, Certificates of Deposit, and Automatic Monthly Contributions Across Twelve-Month Savings Plans" (≤3 lines at 375px, no overflow).
- Longest-result stress: `9,999,999.00 USD — DEMO illustration only` (wraps without overflow, tabular-nums).
- Motion: `color/background/border-color 150ms, transform 200ms` only; `prefers-reduced-motion: reduce` disables all transform. Focus visible always.

## Harness: path + screenshots + sign-off
- Harness: `.omo/upgrade-20261115/showcases/save/index.html` (static, inline CSS/JS, zero deps). Covers all 8 primitives in all states (default/hover/focus/error/disabled/calculating/reduced-motion) at 375/768/1280.
- Screenshots: pending real rendered captures at 375/768/1280 + longest-title stress — NOT claimed in this task (no browser tooling per task boundary). No Lighthouse numbers, no SEO/revenue claims.
- Sign-off: pending independent visual approval BEFORE any product route edit (showcase-before-product binding).

## Boundaries: formulas/links/canonical/consent preserved; no new deps
- No product/tests/formula/next-env/git/deploy edits in this task. Formulas untouched; DEMO arithmetic in harness is illustration only, not a product formula change.
- No canonical/metadataBase churn, no legal-page noindex, no sitemap-date refresh, no priority/changefreq claims.
- No fake reviewers/dates/staff portraits/verified stamps; no prose-only tests as behavior proof.
- No commits/push/deploy/AdSense review/account changes/purchases. `next-env.d.ts` + all uncommitted work preserved (only the 2 assigned paths written).
- No unverified photo/placeholder image, no hotlinking, no generated image as photography. No money guarantees: every figure labeled DEMO illustration, methodology line + limits link present.
- Tests separate: `.omo/tests/save` owned by test-only writer; this task makes no measured-PASS claims.
