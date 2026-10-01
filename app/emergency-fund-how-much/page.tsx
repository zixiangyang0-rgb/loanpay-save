import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Fund: How Much Do You Need? | LoanPay Save",
  description:
    "Size your emergency fund in 2026: the 3-6 month rule, when 12 months makes sense, what counts as essential spending, and where beginners start.",
};

export default function EmergencyFundHowMuchPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
        Updated: October 2026 · Emergency & goals
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        Emergency Fund: How Much Is Enough in 2026?
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        An emergency fund is cash reserved for true surprises — job loss, major car repairs,
        medical deductibles — not vacations or holiday shopping. The classic guidance says three
        to six months of essential expenses, but the right number depends on how volatile your
        income is, how many earners share your household, and what safety nets you already have.
        Too small and one layoff forces high-interest debt; too large and years of excess cash
        earning savings yields instead of invested returns quietly costs tens of thousands. This
        guide shows how to compute your number, adjust it to your situation, and build it from
        zero without misery.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Start with essential monthly spending</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Emergency math runs on essentials, not total spending. List housing (rent or mortgage plus
        insurance and taxes), utilities, groceries at a basics level, transportation to work,
        insurance premiums, minimum debt payments, childcare, and essential medical costs. Exclude
        dining out, subscriptions, travel, clothing beyond basics, and anything you would instantly
        cut if income stopped. For most households, essentials land around 60–75% of take-home pay
        — a $6,000 monthly spender might find $4,200 of true essentials. Multiply that figure by
        your target months: that product is your fund size. Using essentials rather than income
        keeps the target honest, because unemployment benefits and slashed discretionary spending
        stretch essentials further than gross-pay rules of thumb imply.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Then adjust for your risk profile. Single-income households, freelancers with lumpy
        revenue, workers in cyclical industries, and people with chronic health conditions should
        aim toward six months or beyond — some planners suggest up to twelve months for
        single-earner families with specialized jobs that take long to replace. Dual-income couples
        with stable jobs and strong disability coverage can reasonably hold three to four months.
        High deductibles argue for more: if your health plan exposes you to a $7,000 out-of-pocket
        maximum, that amount should effectively sit inside the fund. Renters with flexible leases
        need less than homeowners facing a roof, furnace, and property-tax calendar with no
        landlord to call.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Target sizes by situation</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
              <th className="px-4 py-3">Household situation</th>
              <th className="px-4 py-3">Suggested cushion</th>
              <th className="px-4 py-3">Why</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Dual stable incomes, insured</td>
              <td className="px-4 py-3">3–4 months of essentials</td>
              <td className="px-4 py-3">Second income + benefits absorb most shocks</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Single income, steady job</td>
              <td className="px-4 py-3">6 months of essentials</td>
              <td className="px-4 py-3">No backup earner; job search takes time</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Freelancer / variable income</td>
              <td className="px-4 py-3">6–9 months of essentials</td>
              <td className="px-4 py-3">Income gaps are routine, not exceptional</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-white">Single earner, specialized role</td>
              <td className="px-4 py-3">9–12 months of essentials</td>
              <td className="px-4 py-3">Replacement jobs are scarce and slow</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Worked example: the $4,200 essentials household</h2>
      <div className="glass-card mt-4 rounded-2xl p-6">
        <p className="text-sm leading-relaxed text-slate-300">
          A couple spends $6,000 monthly but identifies $4,200 of essentials: $1,800 housing,
          $600 groceries, $400 transport, $500 insurance and minimums, $500 childcare basics, $400
          utilities and medical. A six-month target is 6 × $4,200 ={" "}
          <strong className="text-white">$25,200</strong>; a three-month starter target is{" "}
          <strong className="text-white">$12,600</strong>. Starting from zero, an automatic $450
          transfer each payday (twice monthly = $900/month) reaches the starter target in about 14
          months and the full target in about 28 months — slow, but every $4,200 milestone covers
          one more month of survival, which reframes progress motivatingly. Parked in an account
          earning an illustrative 4.00%, the completed $25,200 fund also generates roughly $1,000 a
          year, essentially paying for its own inflation drag. (Rate illustrative — check current
          offers.) The household&apos;s rule: pause extra investing only until the starter target,
          then fund both simultaneously, because over-saving cash for years has its own cost.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Building from zero without burnout</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        If saving $900 a month sounds impossible, shrink the first goal to $1,000 — enough to
        absorb the median surprise car repair or emergency-room copay without a credit card. Sell
        something, bank a tax refund, or divert one subscription; momentum matters more than the
        amount. Then automate a transfer sized to reach one month of essentials within about six
        months, and raise it each time income rises. Windfalls get a standing rule (for example,
        half to the fund until it is full) so decisions are pre-made. Keep the fund in a separate
        high-yield savings account at a different bank from checking if you raid savings
        impulsively — one to three days of transfer delay is a feature, not a bug, for money whose
        job is to sit still.
      </p>

      <h2 className="mt-10 text-2xl font-bold">When to grow, shrink, or spend the fund</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        The fund is not a monument — resize it as life changes. A new baby, a move to a higher
        deductible, or a shift to freelance income all argue for adding a month or two of
        essentials; becoming a dual-income household, paying off the mortgage, or securing strong
        disability coverage can justify trimming toward three months and redirecting the excess to
        investing. Spending the fund is equally deliberate: job loss draws go to essentials only,
        tracked weekly, with a written refill plan starting the first paycheck of re-employment.
        Refill before resuming discretionary investing — a half-empty fund alongside a growing
        brokerage account is a priority inversion that the next surprise will punish. Review the
        target every January alongside insurance renewals so coverage and cash stay matched.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Frequently asked questions</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Should I pay debt or build savings first?</h3>
          <p className="mt-2">
            Do both in sequence: build a $1,000–$2,000 mini-fund first so surprises stop adding to
            debt, then attack high-interest debt aggressively, then complete the full 3–6 month
            fund. Skipping the mini-fund means every emergency lands back on the card you just paid
            down.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Can my emergency fund be too big?</h3>
          <p className="mt-2">
            Yes. Cash beyond about 6–12 months of essentials (depending on your risk) typically
            earns less than long-term investments over time. Once the fund is full, redirect new
            savings to retirement accounts, CDs, or other goals rather than growing cash
            indefinitely.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">What counts as an emergency?</h3>
          <p className="mt-2">
            Sudden, necessary, and urgent: job loss, essential home or car repairs, medical bills,
            emergency travel. Not emergencies: sales, holidays, routine bills you forgot to budget,
            or investment &ldquo;opportunities.&rdquo; Write your definition down when times are
            calm so stressed-you cannot renegotiate it.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Should couples combine emergency funds?</h3>
          <p className="mt-2">
            A joint fund sized to shared essentials works for most couples and simplifies
            management. Partners with very different risk tolerances sometimes hold a shared base
            plus small individual buffers — the structure matters less than both partners agreeing
            on the number and the rules for touching it.
          </p>
        </div>
      </div>

      <p className="mt-10 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
        General education, not financial advice. Size your fund to your own risks and confirm
        account terms before depositing. Read our full{" "}
        <Link href="/disclaimer" className="underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
