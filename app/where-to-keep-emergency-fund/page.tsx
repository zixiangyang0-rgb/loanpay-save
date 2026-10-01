import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { ArticleJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Where to Keep Your Emergency Fund | LoanPay Save",
  description:
    "Best homes for emergency cash in 2026: tiered savings, T-bills, I bonds, and what to avoid — balancing speed, safety, and yield.",
  alternates: {
    canonical: "https://save.loanpaylogic.com/where-to-keep-emergency-fund",
  },
};

export default function WhereToKeepEmergencyFundPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
        Updated: October 2026 · Emergency & goals
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        Where to Keep Your Emergency Fund: Safe, Reachable, Growing
      </h1>
      <p className="mt-3 text-xs text-slate-400">
        By <span className="font-semibold text-slate-200">LoanPay Save Editorial Team</span> · Updated October 2026 · General education, not financial advice.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Knowing your emergency-fund number is half the battle; parking it correctly is the other
        half. The ideal home is safe from market loss, reachable within days, and earning a
        competitive yield so inflation does not quietly shrink it. In practice that means a mix:
        instant-access cash for the first layer, slightly higher-yielding instruments for deeper
        layers you will rarely touch. This guide lays out a tiered placement strategy, honest
        assessments of each option — savings, money markets, T-bills, I bonds — and the places
        emergency money should never go.
      </p>

      <h2 className="mt-10 text-2xl font-bold">The three-tier placement model</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Tier one is immediate cash: one month of essentials in checking or instant-access savings,
        available the same day for tows, urgent copays, and midnight emergencies. Tier two is the
        core reserve — two to five more months in a high-yield savings account at a competitive
        online bank, reachable in one to three business days. This tier does the heavy lifting and
        should hold the bulk of most funds. Tier three is the deep reserve for large or extended
        crises: additional months in instruments with slightly better yields and slightly slower
        access, such as short Treasury bills or seasoned I bonds. A job loss draws down tier one
        first while tier three keeps compounding; a single car repair never touches tier three at
        all. Size the tiers to your life: freelancers with lumpy income often fatten tier one,
        while tenured employees might keep tier one lean.
      </p>

      <AdSlot format="in-article" slot="TODO-save-inarticle-1" />
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Keep all three tiers boring and insured. Tier one and two belong in FDIC-insured deposit
        accounts (confirming coverage per ownership category if balances are large). Tier three can
        use direct US Treasury obligations — T-bills and I bonds carry the federal
        government&apos;s backing rather than FDIC insurance, which for practical purposes is
        equally safe for emergency purposes. What unites all tiers is zero exposure to market
        principal risk: emergency money must be worth exactly what you put in, whenever you need
        it, without waiting for a market recovery.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Placement options compared</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
              <th className="px-4 py-3">Home</th>
              <th className="px-4 py-3">Access speed</th>
              <th className="px-4 py-3">Safety</th>
              <th className="px-4 py-3">Role</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Checking / instant savings</td>
              <td className="px-4 py-3">Same day</td>
              <td className="px-4 py-3">FDIC to limits</td>
              <td className="px-4 py-3">Tier one: first-month buffer</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">High-yield savings</td>
              <td className="px-4 py-3">1–3 business days</td>
              <td className="px-4 py-3">FDIC to limits</td>
              <td className="px-4 py-3">Tier two: core reserve</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Short T-bills (4–13 wk)</td>
              <td className="px-4 py-3">Days; sellable or maturing weekly</td>
              <td className="px-4 py-3">US Treasury obligation; state-tax-free</td>
              <td className="px-4 py-3">Tier three: deep reserve yield</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-white">I bonds (held 12+ months)</td>
              <td className="px-4 py-3">Days via TreasuryDirect; 12-mo lock applies</td>
              <td className="px-4 py-3">US Treasury; inflation-adjusted</td>
              <td className="px-4 py-3">Tier three: inflation-protected deep layer</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Worked example: tiering a $24,000 fund</h2>
      <div className="glass-card mt-4 rounded-2xl p-6">
        <p className="text-sm leading-relaxed text-slate-300">
          A household with $4,000 in monthly essentials holds a $24,000 six-month fund. Tier one:
          $4,000 stays in checking — earning little, but available instantly. Tier two: $12,000
          sits in a high-yield savings account earning an illustrative 4.00%, about{" "}
          <strong className="text-white">$480/year</strong>. Tier three: $8,000 split between a
          rolling 13-week T-bill ladder and I bonds past their 12-month lockup, earning an
          illustrative blended 4.20%, about <strong className="text-white">$336/year</strong>.
          Total yield: roughly <strong className="text-white">$816/year</strong> versus about $24
          if the whole fund sat in a 0.10% checking sweep — nearly $800 extra annually with every
          tier still reachable within days. (Rates illustrative — check current offers.) Contrast
          the failure modes: if this household instead chased returns in a stock fund that drops
          20% just as a layoff hits, the &ldquo;fund&rdquo; is worth $19,200 at the worst moment.
          Tiering buys yield without ever risking that arithmetic.
        </p>

      <AdSlot format="display" slot="TODO-save-display-2" />
      </div>

      <h2 className="mt-10 text-2xl font-bold">Where emergency money must never go</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Stocks, stock funds, and crypto are disqualified by volatility — a 30% drawdown coinciding
        with job loss is precisely when you need the money most. Long-term CDs with heavy penalties
        fail the access test for tier one and two, though short or no-penalty CDs can play a
        supporting role. Cash value life insurance and annuities combine slow access with fees and
        complexity. And physical cash beyond a small home buffer earns nothing, risks theft and
        fire, and cannot be replaced — keep at most a few hundred dollars for outages, with the
        rest in insured accounts. One more subtle trap: commingling the fund with vacation savings
        in one undifferentiated account, which lets lifestyle spending silently consume the safety
        net. Separate accounts or labeled buckets prevent that drift.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Keeping tiers honest over time</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Tier boundaries erode without maintenance: checking swells with unspent surplus, savings
        gets raided for non-emergencies, and tier three gets forgotten entirely. Enforce the lines
        twice a year with a thirty-minute review: sweep checking down to one month of essentials
        (excess flows to tier two), confirm tier two still covers its target months after any
        spending growth, and verify tier-three instruments (T-bill maturities, I bond seasoning)
        remain valid for their role. Relabel accounts if banks allow custom names —
        &ldquo;Emergency Tier 2 — Do Not Touch&rdquo; outperforms &ldquo;Savings-4821&rdquo; at 11
        p.m. precisely because it states the rule at the moment of temptation. Households that
        automate the review (calendar invite, same checklist each time) keep crisp tiers for
        years; households that wing it discover blurred tiers exactly when clarity matters most.
      </p>

            <AdSlot format="multiplex" slot="TODO-save-multiplex-1" />

      <h2 className="mt-10 text-2xl font-bold">Frequently asked questions</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">Should spouses each keep their own fund?</summary>
          <p className="mt-2">One joint fund sized to shared essentials is simplest and avoids duplicated idle cash.
            Couples who prefer autonomy can split proportionally to income — either works as long
            as the combined total hits the target and both partners know where it lives.</p>
        </details>
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">Can I bonds really be emergency money?</summary>
          <p className="mt-2">Only the seasoned portion. I bonds cannot be redeemed at all for 12 months, so new
            purchases are not emergency money yet. After the lockup expires, they become an
            excellent inflation-protected deep tier — redeemable in days, with only a 3-month
            interest penalty before year five.</p>
        </details>
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">How often should I rebalance the tiers?</summary>
          <p className="mt-2">Check twice a year or after major changes: raises, moves, new babies, or insurance
            changes all shift essentials. Refill any tier you raided as the top savings priority
            before resuming investing — an emergency fund with a hole in it is just a savings
            account.</p>
        </details>
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">Does keeping tier one in checking waste money?</summary>
          <p className="mt-2">Trivially. One month of essentials earning near-zero instead of 4% costs roughly 0.3%
            of annual spending — a few dozen dollars a year for most households. Instant access for
            true midnight emergencies is worth far more than that.</p>
        </details>
      </div>

      <p className="mt-10 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
        General education, not financial advice. Verify account terms, Treasury rules, and current
        yields before placing funds. Read our full{" "}
        <Link href="/disclaimer" className="underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>
      <ArticleJsonLd
        slug="/where-to-keep-emergency-fund"
        title="Where to Keep Your Emergency Fund | LoanPay Save"
        description="Best homes for emergency cash in 2026: tiered savings, T-bills, I bonds, and what to avoid — balancing speed, safety, and yield."
      />
      <FaqJsonLd
        items={[
          { question: "Should spouses each keep their own fund?", answer: "One joint fund sized to shared essentials is simplest and avoids duplicated idle cash. Couples who prefer autonomy can split proportionally to income — either works as long as the combined total hits the target and both partners know where it lives." },
          { question: "Can I bonds really be emergency money?", answer: "Only the seasoned portion. I bonds cannot be redeemed at all for 12 months, so new purchases are not emergency money yet. After the lockup expires, they become an excellent inflation-protected deep tier — redeemable in days, with only a 3-month interest penalty before year five." },
          { question: "How often should I rebalance the tiers?", answer: "Check twice a year or after major changes: raises, moves, new babies, or insurance changes all shift essentials. Refill any tier you raided as the top savings priority before resuming investing — an emergency fund with a hole in it is just a savings account." },
          { question: "Does keeping tier one in checking waste money?", answer: "Trivially. One month of essentials earning near-zero instead of 4% costs roughly 0.3% of annual spending — a few dozen dollars a year for most households. Instant access for true midnight emergencies is worth far more than that." }
        ]}
      />
      <BreadcrumbJsonLd slug="/where-to-keep-emergency-fund" title="Where to Keep Your Emergency Fund" />

    </div>
  );
}
