import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { ArticleJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "529 Plan Basics: Tax-Free College Savings | LoanPay Save",
  description:
    "529 education savings plans in 2026: tax-free growth, contribution rules, state deductions, SECURE 2.0 Roth rollovers, and what happens if college plans change.",
  alternates: {
    canonical: "https://save.loanpaylogic.com/529-plan-basics",
  },
};

export default function Plan529BasicsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
        Updated: October 2026 · Emergency & goals
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        529 Plan Basics: The Tax-Free Engine for Education Savings
      </h1>
      <p className="mt-3 text-xs text-slate-400">
        By <span className="font-semibold text-slate-200">LoanPay Save Editorial Team</span> · Updated October 2026 · General education, not financial advice.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        A 529 plan is a tax-advantaged investment account dedicated to education: contributions
        grow free of federal tax, and withdrawals for qualified education expenses — tuition, room
        and board, books, and more — come out federal-tax-free as well. Unlike retirement accounts,
        there are no income limits and contribution ceilings are generous (often $300,000+
        lifetime per beneficiary, set by each state). The parent typically owns the account and the
        child is the beneficiary, so control never transfers at 18. Add state tax deductions in
        many states plus SECURE 2.0&apos;s Roth rollover escape hatch for unused funds, and the
        529 is the default answer for dedicated college savings in 2026.
      </p>

      <h2 className="mt-10 text-2xl font-bold">How the tax benefits stack</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        The federal benefit is back-loaded: no deduction for contributions, but all growth and all
        qualified withdrawals escape federal tax entirely. Over 18 years that compounding without
        annual tax drag is worth thousands versus a taxable account — a family contributing $300
        monthly at an illustrative 7% average return accumulates roughly $129,000, of which about
        $64,000 is growth that would otherwise face yearly taxes on dividends plus capital-gains
        tax at sale. (Returns illustrative, not guaranteed.) More than half the states add a
        front-end benefit: deductions or credits for contributions, typically capped (for example,
        illustrative ranges of $2,000–$10,000 deductible per year depending on state and filing
        status). You need not use your own state&apos;s plan to get the federal benefits, but you
        generally must use it to claim its deduction — compare your state&apos;s tax savings
        against another state&apos;s lower fees before defaulting to home.
      </p>

      <AdSlot format="in-article" slot="TODO-save-inarticle-1" />
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Qualified expenses have expanded well beyond four-year tuition: K–12 tuition up to $10,000
        per year, apprenticeship program costs, student-loan repayment up to a $10,000 lifetime
        limit per beneficiary, and under SECURE 2.0, up to $35,000 lifetime rolled to the
        beneficiary&apos;s Roth IRA (account open 15+ years, subject to annual contribution limits
        and a five-year contribution seasoning rule). Non-qualified withdrawals face income tax
        plus a 10% penalty on the earnings portion only — contributions come back penalty-free
        since they were after-tax money. That penalty applies to earnings, not the whole
        withdrawal, which softens the oft-cited &ldquo;what if my kid skips college&rdquo; fear
        considerably.
      </p>

      <h2 className="mt-10 text-2xl font-bold">529 vs. other education savings</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
              <th className="px-4 py-3">Vehicle</th>
              <th className="px-4 py-3">Tax treatment</th>
              <th className="px-4 py-3">Control</th>
              <th className="px-4 py-3">Flexibility</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">529 plan</td>
              <td className="px-4 py-3">Tax-free growth + qualified withdrawals; some state deductions</td>
              <td className="px-4 py-3">Owner (parent) keeps control</td>
              <td className="px-4 py-3">Beneficiary changeable within family</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Custodial UTMA/UGMA</td>
              <td className="px-4 py-3">Kiddie-tax rules; no education shield</td>
              <td className="px-4 py-3">Transfers to child at majority</td>
              <td className="px-4 py-3">Spendable on anything at majority</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Coverdell ESA</td>
              <td className="px-4 py-3">Tax-free for education; $2,000/yr cap; income phaseouts</td>
              <td className="px-4 py-3">Custodian manages for child</td>
              <td className="px-4 py-3">Broader K–12 use; tiny limits</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-white">Taxable account</td>
              <td className="px-4 py-3">Annual tax drag; capital gains at sale</td>
              <td className="px-4 py-3">Full owner control</td>
              <td className="px-4 py-3">Total freedom, zero education perks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Worked example: $300/month from birth to 18</h2>
      <div className="glass-card mt-4 rounded-2xl p-6">
        <p className="text-sm leading-relaxed text-slate-300">
          Parents contribute $300 monthly ($3,600/year) from birth. At an illustrative 7% average
          annual return in an age-based 529 portfolio, the balance at 18 is roughly{" "}
          <strong className="text-white">$129,000</strong> ($64,800 contributed, ~$64,200 growth) —
          all withdrawable federal-tax-free for qualified costs. In a taxable account with an
          illustrative 0.50% annual tax drag (effective ~6.5%), the same contributions reach about{" "}
          <strong className="text-white">$122,000</strong>, and selling triggers capital-gains tax
          on the growth — perhaps $6,000–$9,000 more lost depending on bracket. Add a state
          deduction worth an illustrative $200/year in tax savings, reinvested, and the 529 edge
          widens past <strong className="text-white">$15,000</strong>. If the child earns a full
          scholarship, options include transferring the 529 to a sibling, holding it for graduate
          school, or rolling up to $35,000 to their Roth IRA under SECURE 2.0 rules — &ldquo;wasted
          if no college&rdquo; is largely a myth under current law. (All figures illustrative;
          verify current rules.)
        </p>

      <AdSlot format="display" slot="TODO-save-display-2" />
      </div>

      <h2 className="mt-10 text-2xl font-bold">Setup checklist and common mistakes</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Open the account with the parent as owner and child as beneficiary; choose an age-based
        portfolio that auto-shifts from stocks toward bonds as college approaches; automate monthly
        contributions timed to paydays; and invite grandparents to contribute (in many states they
        can claim the deduction too, and 529 gifts qualify for annual gift-tax exclusion treatment
        with a five-year superfunding election available for large lump sums). Avoid overfunding
        far beyond realistic costs before maxing retirement accounts — you can borrow for college
        but not for retirement. Do not hold the 529 in the child&apos;s name as custodian when
        parental ownership preserves control and aid treatment. And coordinate with American
        Opportunity and Lifetime Learning credits: the same dollar cannot double-dip both a credit
        and tax-free 529 treatment, so allocate expenses deliberately at withdrawal time.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Contribution strategies by child&apos;s age</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Timing shapes tactics. With a newborn, front-loading wins: even modest extra contributions
        in the first five years compound longer than everything added later, so grandparents&apos;
        birth gifts and early bonuses belong in the 529 immediately. During elementary years,
        steady monthly automation plus annual lump sums (tax refunds, raises) keeps growth on
        track — a yearly 30-minute review of the age-based portfolio&apos;s glide path suffices.
        In high school, shift new contributions toward conservative options within the plan as
        tuition approaches, and start mapping which expenses will draw from the 529 versus cash
        flow or credits to avoid double-dipping the same dollar. If multiple children are spaced
        years apart, fund the oldest&apos;s account primarily and plan beneficiary transfers
        downward — overfunding one account is fixable, underfunding all of them is not.
      </p>

            <AdSlot format="multiplex" slot="TODO-save-multiplex-1" />

      <h2 className="mt-10 text-2xl font-bold">Frequently asked questions</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">Does a 529 hurt financial-aid eligibility?</summary>
          <p className="mt-2">Parent-owned 529s are assessed as parental assets (a low assessment rate, around 5.64%
            in the federal formula) — far gentler than student-owned UTMA assets at around 20%.
            Grandparent-owned 529 distributions historically complicated aid, though recent FAFSA
            simplification changed the treatment — confirm current-year rules when planning.</p>
        </details>
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">Can I change the beneficiary?</summary>
          <p className="mt-2">Yes, to another qualifying family member (sibling, cousin, parent, even yourself) with
            no tax consequences. This flexibility is the answer to most &ldquo;what if&rdquo;
            scenarios — unused funds follow the family&apos;s needs, not just one child&apos;s
            path.</p>
        </details>
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">How does the Roth rollover escape hatch work?</summary>
          <p className="mt-2">Under SECURE 2.0, up to $35,000 lifetime can roll from a 529 to the beneficiary&apos;s
            Roth IRA, provided the 529 has existed 15+ years, contributions being rolled are 5+
            years old, and rollovers respect annual Roth limits and earned-income requirements.
            Verify current IRS guidance — details have evolved since enactment.</p>
        </details>
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">Which state&apos;s plan should I pick?</summary>
          <p className="mt-2">If your state offers a meaningful deduction or credit, its plan usually wins unless
            fees are extreme. Without a home-state perk, compare the lowest-cost highly rated
            national plans on expense ratios and investment options — check current plan ratings
            before committing.</p>
        </details>
      </div>

      <p className="mt-10 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
        General education, not financial advice. Tax law and plan rules evolve — verify current
        contribution limits, deductions, and rollover provisions. Read our full{" "}
        <Link href="/disclaimer" className="underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>
      <ArticleJsonLd
        slug="/529-plan-basics"
        title="529 Plan Basics: Tax-Free College Savings | LoanPay Save"
        description="529 education savings plans in 2026: tax-free growth, contribution rules, state deductions, SECURE 2.0 Roth rollovers, and what happens if college plans change."
      />
      <FaqJsonLd
        items={[
          { question: "Does a 529 hurt financial-aid eligibility?", answer: "Parent-owned 529s are assessed as parental assets (a low assessment rate, around 5.64% in the federal formula) — far gentler than student-owned UTMA assets at around 20%. Grandparent-owned 529 distributions historically complicated aid, though recent FAFSA simplification changed the treatment — confirm current-year rules when planning." },
          { question: "Can I change the beneficiary?", answer: "Yes, to another qualifying family member (sibling, cousin, parent, even yourself) with no tax consequences. This flexibility is the answer to most 'what if' scenarios — unused funds follow the family's needs, not just one child's path." },
          { question: "How does the Roth rollover escape hatch work?", answer: "Under SECURE 2.0, up to $35,000 lifetime can roll from a 529 to the beneficiary's Roth IRA, provided the 529 has existed 15+ years, contributions being rolled are 5+ years old, and rollovers respect annual Roth limits and earned-income requirements. Verify current IRS guidance — details have evolved since enactment." },
          { question: "Which state's plan should I pick?", answer: "If your state offers a meaningful deduction or credit, its plan usually wins unless fees are extreme. Without a home-state perk, compare the lowest-cost highly rated national plans on expense ratios and investment options — check current plan ratings before committing." }
        ]}
      />
      <BreadcrumbJsonLd slug="/529-plan-basics" title="529 Plan Basics: Tax-Free College Savings" />

    </div>
  );
}
