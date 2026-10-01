import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Treasury Bills vs. CDs: After-Tax Math | LoanPay Save",
  description:
    "T-bills versus bank CDs in 2026: state-tax exemption, FDIC limits, liquidity, minimums, and a worked after-tax comparison.",
};

export default function TreasuryBillsVsCdsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
        Updated: October 2026 · CDs & bonds
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        Treasury Bills vs. CDs: The After-Tax Comparison Nobody Shows You
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Treasury bills and certificates of deposit compete for the same dollars: safe, fixed-term
        cash earning a known yield. T-bills are short-term US government debt (4 to 52 weeks) sold
        at a discount — you pay less than face value and collect the full amount at maturity, with
        the difference as your earnings. CDs are bank time deposits with FDIC insurance and
        early-withdrawal penalties. Headline yields often favor CDs, but T-bill interest is exempt
        from state and local income tax, which can flip the winner for residents of high-tax
        states. This guide compares both honestly, with the after-tax math worked line by line.
        All yields below are illustrative — check current offers and auction results.
      </p>

      <h2 className="mt-10 text-2xl font-bold">How T-bills work in plain English</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        The Treasury auctions bills weekly in standard terms — 4, 8, 13, 17, 26, and 52 weeks —
        with a $100 minimum in $100 increments, purchasable through TreasuryDirect or any major
        brokerage. You might pay $9,800 for a $10,000 26-week bill; at maturity you receive
        $10,000, and the $200 difference is your interest. Need out early? Bills trade on a deep
        secondary market, so brokerages generally let you sell in a day or two near fair value —
        far more flexible than breaking a bank CD, though very short-term price moves can nibble a
        few dollars either way. Federal tax applies to the interest as ordinary income, but no
        state or local tax does, under federal law (31 USC 3124). Reinvesting every maturity into
        a new bill — a T-bill ladder — keeps cash nearly as liquid as savings while capturing
        fixed-term yields.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        CDs invert several of these properties. Bank CDs commonly require $500–$1,000 minimums
        (many online banks now $0), pay interest that is fully taxable at both federal and state
        levels, and punish early exits with penalties of 90–365 days of interest rather than
        offering a resale market. Their advantages: FDIC insurance up to $250,000 per depositor per
        category, dead-simple mechanics with no auction jargon, terms stretching to five years for
        locking rates long-term, and promotional specials that periodically beat everything else
        on the board. For savers in no-income-tax states like Texas or Florida, the T-bill&apos;s
        tax edge vanishes and CDs usually win outright on headline yield.
      </p>

      <h2 className="mt-10 text-2xl font-bold">T-bills vs. CDs at a glance</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
              <th className="px-4 py-3">Feature</th>
              <th className="px-4 py-3">Treasury bills</th>
              <th className="px-4 py-3">Bank CDs</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Safety backing</td>
              <td className="px-4 py-3">Direct US Treasury obligation, no cap</td>
              <td className="px-4 py-3">FDIC to $250,000 per depositor/category</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Taxation</td>
              <td className="px-4 py-3">Federal ordinary income; exempt from state/local</td>
              <td className="px-4 py-3">Federal + state/local ordinary income</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Terms & minimums</td>
              <td className="px-4 py-3">4–52 weeks; $100 minimum</td>
              <td className="px-4 py-3">3 months–5 years; often $500–$1,000</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Early exit</td>
              <td className="px-4 py-3">Sell on secondary market, usually near par</td>
              <td className="px-4 py-3">Penalty of months of interest</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-white">Ease of use</td>
              <td className="px-4 py-3">Auction mechanics; easiest via brokerage</td>
              <td className="px-4 py-3">Simple: open, fund, wait</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Worked example: when the tax break flips the winner</h2>
      <div className="glass-card mt-4 rounded-2xl p-6">
        <p className="text-sm leading-relaxed text-slate-300">
          A California saver in a high bracket compares an illustrative 12-month CD at 4.80%
          against an illustrative 52-week T-bill at 4.20% on $50,000. CD gross: $50,000 × 0.048 ={" "}
          <strong className="text-white">$2,400</strong>. T-bill gross: $50,000 × 0.042 ={" "}
          <strong className="text-white">$2,100</strong>. Now taxes at illustrative rates — 32%
          federal plus 9.3% state. CD after tax: $2,400 × (1 − 0.32 − 0.093) ≈{" "}
          <strong className="text-white">$1,409</strong>. T-bill after tax (no state bite): $2,100
          × (1 − 0.32) ≈ <strong className="text-white">$1,428</strong>. The T-bill wins by a nose
          despite trailing by 60 basis points pre-tax. In a no-tax state the same comparison gives
          the CD about $1,632 vs. the bill&apos;s $1,428 — CD wins comfortably. (All rates and
          brackets illustrative — run your own numbers with current offers.) The decision rule:
          multiply any CD yield by (1 − your state rate) before comparing with T-bills, and
          remember the bill&apos;s liquidity edge on top.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Practical setup: a T-bill ladder beside your CDs</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        You do not have to choose exclusively. A common 2026 setup holds a CD ladder for
        locked-in multi-year yield plus a rolling T-bill ladder (for example, 13-week bills
        bought every month) for tax-efficient liquidity. Buying through a brokerage rather than
        TreasuryDirect keeps bills, CDs (brokered), and investments on one statement with easy
        resale and automatic reinvestment options; TreasuryDirect works fine but adds a separate
        login and slower transfers. Calendar maturities alongside CD grace periods so both ladders
        get reviewed in one quarterly session. And track cost basis simply: brokerages report
        T-bill interest on 1099-INT like bank interest, so tax season needs no special handling
        beyond confirming the state-exempt portion flows correctly to your state return.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Common mistakes first-time bill buyers make</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Three errors recur. First, buying through TreasuryDirect for money needed within days —
        TreasuryDirect redemptions and transfers are slower than brokerage sales, so keep
        quick-access cash in savings or a brokerage ladder instead. Second, ignoring the auction
        calendar: placing a TreasuryDirect order after the auction deadline parks cash idly until
        the next auction, while brokerages offer secondary-market fills anytime. Third,
        overcomplicating taxes — T-bill interest arrives on the same 1099-INT as bank interest,
        with the state-exempt portion flowing to the state return; flag it for your tax software
        rather than treating it as exotic income. Start with a single 13-week bill, watch one
        full purchase-to-maturity cycle, and only then automate a rolling ladder — one supervised
        repetition teaches more than any guide.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Frequently asked questions</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Can I lose money in T-bills?</h3>
          <p className="mt-2">
            Held to maturity, T-bills pay face value backed by the US government — the practical
            risk is essentially zero in nominal terms. Selling early on the secondary market can
            produce small gains or losses if rates moved, and inflation can erode real purchasing
            power, but nominal loss at maturity is not a realistic outcome.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">What is the minimum to buy T-bills?</h3>
          <p className="mt-2">
            $100 in $100 increments for TreasuryDirect and most brokerages — lower than most bank
            CDs. Non-competitive bids up to $10 million per auction are available for very large
            savers, far above FDIC caps that would otherwise force multi-bank spreading.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Are T-bills better than a high-yield savings account?</h3>
          <p className="mt-2">
            Different jobs: T-bills lock a fixed yield and dodge state tax but require rolling
            maturities; savings stay instantly liquid with variable rates. Many savers hold both —
            savings for the emergency core, T-bills for the deeper reserve earning a fixed,
            tax-efficient yield.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Do T-bills make sense in no-tax states?</h3>
          <p className="mt-2">
            Less often on yield alone, since the state-tax edge is worth zero there — compare
            headline rates directly and favor CDs or savings when they lead. T-bills can still win
            on liquidity (resale vs. penalties) or when amounts exceed convenient FDIC coverage.
          </p>
        </div>
      </div>

      <p className="mt-10 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
        General education, not financial advice. Yields move with auctions and bank offers — check
        current figures and confirm tax treatment for your state. Read our full{" "}
        <Link href="/disclaimer" className="underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
