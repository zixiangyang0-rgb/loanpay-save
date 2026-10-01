import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I Bonds Explained 2026: Limits, Rates & Locks | LoanPay Save",
  description:
    "Series I savings bonds in 2026: the $10,000 annual limit, inflation-adjusted composite rate, 12-month lockup, and when I bonds fit your plan.",
};

export default function IBondsExplainedPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
        Updated: October 2026 · CDs & bonds
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        I Bonds Explained 2026: Inflation Protection With Strings Attached
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Series I savings bonds are US government bonds designed to protect purchasing power: their
        interest rate combines a fixed rate (locked for the bond&apos;s 30-year life) with an
        inflation rate that resets every six months based on the Consumer Price Index. When
        inflation surges, I bond yields jump; when inflation cools, they fall — but the composite
        rate can never go below zero, so your principal never shrinks. The tradeoffs are strict
        facing rules: a $10,000 annual electronic purchase limit per person, a 12-month lockup
        with zero redemptions, and a 3-month interest penalty for redemptions before five years.
        This guide covers the mechanics, the math, and where I bonds fit in a 2026 savings plan.
      </p>

      <h2 className="mt-10 text-2xl font-bold">The composite rate: fixed plus inflation</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Each I bond&apos;s annualized yield comes from a published formula combining the
        bond&apos;s fixed rate (set at purchase; recent vintages have ranged from 0.00% to above
        1.00%) with the semiannual inflation rate (which can be positive or negative). The Treasury
        announces new inflation components each May and November, and your bond&apos;s rate resets
        on its own six-month clock from its issue month — not on the announcement date itself,
        which confuses many buyers tracking &ldquo;the new I bond rate&rdquo; in headlines. The
        floor matters: even in deflation, combined rates cannot go negative, and previously earned
        interest is never clawed back. Interest accrues monthly and compounds semiannually, paid
        only at redemption — you see no payouts along the way, just a growing redemption value in
        TreasuryDirect. Because the fixed portion never changes for your bond, buying when the
        fixed rate is relatively generous locks in a durable real return for up to 30 years.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Taxes are friendlier than bank interest but deferred in an unusual way. Federal tax applies
        to I bond interest as ordinary income, but you generally owe nothing until you redeem (or
        the bond matures in 30 years) unless you elect annual reporting — a built-in deferral that
        bank CDs cannot match. State and local taxes do not apply at all. An education-tax
        exclusion can make interest fully federal-tax-free when used for qualifying college
        expenses under income limits and registration rules, though the restrictions (bonds must be
        registered to the parent, not the child, among others) trip up many families. Check current
        TreasuryDirect guidance and IRS rules before counting on the exclusion.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Rules and limits at a glance</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
              <th className="px-4 py-3">Rule</th>
              <th className="px-4 py-3">I bonds</th>
              <th className="px-4 py-3">Why it matters</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Annual purchase limit</td>
              <td className="px-4 py-3">$10,000 electronic per person, per calendar year</td>
              <td className="px-4 py-3">Caps how fast you can build a position</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Minimum purchase</td>
              <td className="px-4 py-3">$25 electronic, to the penny</td>
              <td className="px-4 py-3">Easy to start small or gift precisely</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Lockup</td>
              <td className="px-4 py-3">No redemption for first 12 months</td>
              <td className="px-4 py-3">New bonds are never emergency money</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Early penalty</td>
              <td className="px-4 py-3">Lose last 3 months of interest if redeemed before 5 years</td>
              <td className="px-4 py-3">Mild vs. CD penalties; vanishes after year 5</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-white">Where held</td>
              <td className="px-4 py-3">TreasuryDirect account (separate login, slower transfers)</td>
              <td className="px-4 py-3">Adds friction vs. bank savings</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Worked example: $10,000 through inflation and back</h2>
      <div className="glass-card mt-4 rounded-2xl p-6">
        <p className="text-sm leading-relaxed text-slate-300">
          You buy the illustrative maximum $10,000 in I bonds in January with a fixed rate of
          1.00% and an annualized inflation component near 3.00%, giving a composite around 4.03%
          (illustrative — check the current announced rate). After the 12-month lockup, the bond is
          worth roughly <strong className="text-white">$10,403</strong> before any penalty
          consideration. Redeem at month 18 and the 3-month penalty trims roughly $100 of recent
          interest, leaving about <strong className="text-white">$10,500+</strong> depending on
          the reset rate — still comfortably ahead of most savings accounts over the same stretch
          when inflation runs hot. Hold five years through cooling inflation averaging an
          illustrative 2.50% composite and the position compounds toward{" "}
          <strong className="text-white">$11,300+</strong> with no penalty and no state tax. The
          mirror risk: if inflation collapses to near zero, the composite can sink toward the fixed
          rate alone, and a plain CD might have paid more — I bonds insure purchasing power, not
          maximum nominal yield. Couples can double capacity ($10,000 each), and trusts and
          businesses have separate limits worth exploring at TreasuryDirect.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Where I bonds fit — and where they don&apos;t</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        I bonds excel as a deep emergency-fund tier (once seasoned past 12 months), an
        inflation-protected slice of education savings alongside 529 plans, and a parking spot for
        cash with a 2–5 year horizon that must not lose real value. They fit poorly as a primary
        emergency fund (lockup), for money needed within a year, for balances far above $10,000 a
        year (the cap throttles scale), and for investors seeking maximum nominal returns in
        low-inflation years. A practical 2026 pattern: buy steadily each year you have surplus
        cash, let each vintage season into redemption eligibility, and treat the growing stack as
        the inflation-proof basement of your savings — rarely visited, always solid.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Frequently asked questions</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Can I buy more than $10,000 per year?</h3>
          <p className="mt-2">
            Electronic purchases cap at $10,000 per person per calendar year. Spouses buy
            separately ($20,000 per couple), and entities like trusts have their own limits. Paper
            I bonds bought with a tax refund were historically allowed beyond the electronic cap
            under separate rules — confirm whether that program is currently available before
            relying on it.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">What happens at 30 years?</h3>
          <p className="mt-2">
            I bonds mature and stop earning interest at 30 years. Redeem matured bonds promptly —
            money sitting past maturity earns nothing, and the deferred federal tax bill comes due
            whether you redeem or not.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Are I bonds better than TIPS?</h3>
          <p className="mt-2">
            Different tools: I bonds never lose nominal value and defer federal tax, but cap
            purchases and lock money for a year. TIPS trade freely in any size with market-price
            risk before maturity. Small savers prioritizing safety usually prefer I bonds; large
            portfolios often use both.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">How do I redeem I bonds?</h3>
          <p className="mt-2">
            Log in to TreasuryDirect, select redeem, and direct proceeds to your linked bank
            account — typically arriving in a few business days. Redemptions are final, partial
            redemptions have minimums, and the 3-month penalty before year five is applied
            automatically.
          </p>
        </div>
      </div>

      <p className="mt-10 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
        General education, not financial advice. Treasury rates, limits, and rules change — verify
        current figures at TreasuryDirect before buying. Read our full{" "}
        <Link href="/disclaimer" className="underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
