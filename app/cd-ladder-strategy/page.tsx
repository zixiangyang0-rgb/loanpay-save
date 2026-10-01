import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CD Ladder Strategy: How to Build One | LoanPay Save",
  description:
    "Build a certificate-of-deposit ladder that balances yield and access: rung sizing, renewal rules, and a worked 5-rung example.",
};

export default function CdLadderStrategyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
        Updated: October 2026 · CDs & bonds
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        CD Ladder Strategy: Yield With Cash Freed Up Regularly
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        A certificate of deposit (CD) pays you a fixed rate for locking money away for a fixed
        term — but locking everything away for five years leaves you helpless if rates rise or a
        roof repair lands in month seven. A CD ladder solves this by splitting your money across
        several CDs with staggered maturities: short rungs for near-term access, long rungs for
        higher yield. As each rung matures, you either spend the cash or roll it into a new
        long-term CD. After one full cycle, you hold a portfolio of top-term rates with a rung
        maturing every few months. This guide shows exactly how to size, stagger, and maintain a
        ladder in 2026.
      </p>

      <h2 className="mt-10 text-2xl font-bold">How a ladder works, step by step</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Start with money you will not need for the ladder&apos;s shortest rung — typically three
        to twelve months of true surplus beyond your emergency fund, which should stay liquid in
        savings. Divide it into equal parts, one per rung. In a classic five-rung annual ladder,
        you open 1-, 2-, 3-, 4-, and 5-year CDs simultaneously. When the 1-year CD matures twelve
        months later, you roll it into a new 5-year CD; a year after that, the original 2-year CD
        matures and becomes a new 5-year CD, and so on. Once the ladder is seasoned, every rung
        earns a 5-year rate while one rung matures each year. Shorter ladders work the same way: a
        four-rung quarterly ladder uses 3-, 6-, 9-, and 12-month CDs and frees cash every quarter,
        at the cost of lower short-term rates.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        The ladder automatically adapts to rate changes. If rates rise, each maturing rung
        reinvests at the new higher rate, so your average yield climbs within a year or two
        without any market timing. If rates fall, only one rung at a time reprices downward while
        the rest keep their locked rates — a much softer landing than holding everything in a
        variable savings account. This self-rebalancing property is the ladder&apos;s real
        advantage over both single CDs and pure savings, and it works in either rate direction.
        Check current CD offers across several banks before building, since the best 5-year rate
        and the best 1-year rate rarely come from the same institution.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Ladder shapes compared</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
              <th className="px-4 py-3">Ladder shape</th>
              <th className="px-4 py-3">Rungs</th>
              <th className="px-4 py-3">Access rhythm</th>
              <th className="px-4 py-3">Best for</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Quarterly mini-ladder</td>
              <td className="px-4 py-3">3, 6, 9, 12 months</td>
              <td className="px-4 py-3">Cash every 3 months</td>
              <td className="px-4 py-3">First-time CD buyers testing the concept</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Classic annual ladder</td>
              <td className="px-4 py-3">1–5 years</td>
              <td className="px-4 py-3">Cash every 12 months</td>
              <td className="px-4 py-3">General savers balancing yield and access</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Barbell ladder</td>
              <td className="px-4 py-3">Heavy short + heavy long, thin middle</td>
              <td className="px-4 py-3">Lumpy: frequent small, rare large</td>
              <td className="px-4 py-3">Savers with one known large future expense</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-white">Bump-up hybrid</td>
              <td className="px-4 py-3">Standard rungs + one bump-up CD</td>
              <td className="px-4 py-3">Annual, with one rate-reset option</td>
              <td className="px-4 py-3">Rising-rate environments</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Worked example: a $25,000 five-rung ladder</h2>
      <div className="glass-card mt-4 rounded-2xl p-6">
        <p className="text-sm leading-relaxed text-slate-300">
          You set aside $25,000 — five rungs of $5,000 each. For illustration only (verify current
          offers), assume 1-year CDs pay 3.50%, 2-year 3.80%, 3-year 4.00%, 4-year 4.10%, and
          5-year 4.20%. Year-one interest is roughly $175 + $190 + $200 + $205 + $210 ={" "}
          <strong className="text-white">$980</strong>, an average yield near 3.92%. After twelve
          months the 1-year rung matures with about $5,175; you roll it into a new 5-year CD at the
          then-current rate. Repeat yearly. By year five, all five rungs are 5-year CDs earning the
          long-term rate, yet one rung still matures every twelve months. If rates have risen a
          full point, your blended yield climbs toward the new level within about two years; if
          they fell, four of five rungs still pay the old higher rates. Compare that with putting
          all $25,000 in a single 5-year CD (higher initial yield, zero access) or all in savings
          (full access, fully variable yield) — the ladder splits the difference deliberately.
          Early-withdrawal penalties, often 90–365 days of interest depending on term, apply only
          if you break a rung before maturity, so size rungs you might raid conservatively.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Maintenance rules that keep ladders working</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Set every CD to renew automatically but disable automatic renewal into the same short term
        — most banks default a maturing CD into an identical term, which silently converts your
        seasoned ladder back into a pile of short CDs. Instead, calendar each maturity with a
        10-day grace-period reminder (banks typically allow penalty-free moves within about ten
        days after maturity) and actively redirect each rung into a new longest-term CD. Revisit
        the whole ladder annually: if your emergency fund has grown enough to cover surprises,
        you can extend the ladder&apos;s longest rung; if a big expense is approaching, let a
        maturing rung land in savings instead of rolling it. And keep the ladder at one or two
        banks — spreading five rungs across five banks for an extra 0.10% each creates a
        paperwork maze that costs more in time than it earns in interest.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Frequently asked questions</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">How much money do I need to start a ladder?</h3>
          <p className="mt-2">
            Many online banks let you open CDs with $500–$1,000 minimums, so a four-rung ladder can
            start around $2,000–$4,000. Smaller ladders still teach the mechanics, though the
            dollar gains are modest — the strategy shines brightest above $10,000.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">What happens if I need the money early?</h3>
          <p className="mt-2">
            You can break a CD anytime, but the early-withdrawal penalty typically forfeits 90 to
            365 days of interest depending on the term, and some banks can dip into principal on
            long CDs broken very early. That is precisely why emergency funds stay in savings, not
            in the ladder.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Are CDs still worth it if savings rates are high?</h3>
          <p className="mt-2">
            Sometimes. A CD locks today&apos;s rate against future cuts, while savings rates float
            downward immediately. If you believe rates will fall, locking part of your cash in CDs
            preserves yield; if you expect rises, keep more in savings and build the ladder
            gradually. Diversifying across both is the no-prediction-required answer.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Should I use brokered CDs in a ladder?</h3>
          <p className="mt-2">
            You can — brokered CDs held in a brokerage account ladder neatly and trade on a
            secondary market instead of charging penalties. But their prices fluctuate before
            maturity and many are callable, so bank CDs with simple penalties suit most beginners
            better. See our brokered CD guide for the full tradeoff.
          </p>
        </div>
      </div>

      <p className="mt-10 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
        General education, not financial advice. CD rates and penalties vary by bank and change
        often — verify current offers and read the early-withdrawal terms before opening. Read our
        full{" "}
        <Link href="/disclaimer" className="underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
