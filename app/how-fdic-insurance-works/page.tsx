import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How FDIC Insurance Works: Limits & Coverage | LoanPay Save",
  description:
    "FDIC deposit insurance in 2026: the $250,000 limit per depositor per bank per category, joint and trust coverage, and how to insure large balances.",
};

export default function HowFdicInsuranceWorksPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
        Updated: October 2026 · Savings accounts
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        How FDIC Insurance Works: The $250,000 Rule, Fully Explained
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        The Federal Deposit Insurance Corporation insures deposits at member banks up to $250,000
        per depositor, per insured bank, for each account ownership category. Since 1934, no
        depositor has lost insured funds — even through bank failures, insured customers typically
        regained access within days via an acquiring bank or direct FDIC payment. Yet surveys
        suggest many savers misunderstand the limit: it is not $250,000 per account, and it is not
        a ceiling on total protection. Used correctly, ownership categories and multiple banks can
        insure millions. This guide explains the coverage formula, the categories that multiply
        it, and what FDIC insurance does not cover.
      </p>

      <h2 className="mt-10 text-2xl font-bold">The coverage formula: three dimensions</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Coverage turns on three independent axes: who owns the money (depositor), where it sits
        (each separately chartered bank), and how it is titled (ownership category). All your
        single-ownership accounts at one bank — checking, savings, CDs, money market deposit
        accounts — aggregate toward one $250,000 limit, no matter how many accounts you split them
        across. Open the same account types at a different bank and a fresh $250,000 limit
        applies. Title money differently at the same bank — say, $250,000 in your individual name
        plus $250,000 in a joint account with a spouse — and each category carries its own limit.
        Coverage is automatic and free: banks pay the premiums, you do nothing, and principal plus
        accrued interest through the failure date are protected together.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Ownership categories are where ordinary families multiply protection without opening
        accounts everywhere. Single accounts cover $250,000 per owner. Joint accounts cover
        $250,000 per co-owner — a two-owner joint account insures $500,000. Certain retirement
        accounts (traditional and Roth IRAs included) get a separate $250,000 per owner.
        Revocable trust and payable-on-death accounts generally cover $250,000 per beneficiary,
        letting a parent naming three children insure up to $750,000 in that category at one bank
        (complex trust rules apply above certain thresholds — use the FDIC&apos;s EDIE calculator
        to verify). A married couple using single, joint, retirement, and trust categories at one
        bank can readily exceed $1,000,000 of coverage before needing a second institution.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Coverage by ownership category</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Limit at one bank</th>
              <th className="px-4 py-3">Example</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Single accounts</td>
              <td className="px-4 py-3">$250,000 per owner</td>
              <td className="px-4 py-3">Your checking + savings + CDs total $250,000</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Joint accounts</td>
              <td className="px-4 py-3">$250,000 per co-owner</td>
              <td className="px-4 py-3">Two-owner joint account: $500,000</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Retirement (IRA etc.)</td>
              <td className="px-4 py-3">$250,000 per owner</td>
              <td className="px-4 py-3">Separate from same-bank non-retirement funds</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Revocable trust / POD</td>
              <td className="px-4 py-3">$250,000 per beneficiary (rules vary)</td>
              <td className="px-4 py-3">3 named beneficiaries: up to $750,000</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-white">Business accounts</td>
              <td className="px-4 py-3">$250,000 per legal entity</td>
              <td className="px-4 py-3">Corporation covered separately from owner&apos;s personal funds</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Worked example: insuring $1,000,000 at one bank</h2>
      <div className="glass-card mt-4 rounded-2xl p-6">
        <p className="text-sm leading-relaxed text-slate-300">
          A couple holds $1,000,000 at one FDIC-insured bank. Structured carelessly — $1,000,000
          in one spouse&apos;s single-name savings — only $250,000 is insured and{" "}
          <strong className="text-white">$750,000 is exposed</strong>. Restructured across
          categories: $250,000 in spouse A&apos;s single accounts, $250,000 in spouse B&apos;s
          single accounts, and $500,000 in their joint account ($250,000 per co-owner) — all{" "}
          <strong className="text-white">$1,000,000 fully insured</strong> at the same bank with
          no new institutions. Add IRAs ($250,000 each, separate category) and the same bank could
          cover $1,500,000. Above what categories allow, the standard moves are a second
          FDIC-insured bank (fresh limits),CDARS-style deposit networks that spread large sums
          across banks automatically, or Treasury bills (direct government obligations with no
          cap). Verify any complex structure with the FDIC&apos;s free EDIE estimator before
          assuming you are covered — titling details decide everything.
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold">What FDIC insurance does not cover</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        FDIC insurance covers deposits, not investments — stocks, bonds, mutual funds, ETFs,
        crypto assets, life insurance, annuities, and safe-deposit contents are excluded even when
        bought at an insured bank&apos;s brokerage window. Money market mutual funds are likewise
        investments, not deposits, despite the confusing name. Credit union accounts are insured
        separately by the NCUA (same $250,000 structure, different agency), and fintech apps that
        hold funds at partner banks may or may not pass FDIC coverage through to you depending on
        how accounts are titled — &ldquo;funds held at partner banks&rdquo; marketing is not a
        guarantee of your personal coverage, so confirm the pass-through structure in writing.
        Finally, the FDIC does not protect against fraud or theft from your account — those fall
        under separate consumer-protection rules (such as Regulation E for electronic transfers),
        not deposit insurance.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Special cases: brokerages, fintechs, and mergers</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Modern cash setups create coverage wrinkles worth checking. Brokerage cash-sweep programs
        often spread uninvested cash across multiple program banks — each bank&apos;s slice gets
        its own $250,000 coverage, but slices aggregate with any direct deposits you hold at the
        same banks, which can silently breach limits for large balances. Fintech apps vary widely:
        some hold your funds in a properly titled for-benefit-of account at a partner bank with
        pass-through coverage, while others hold pooled omnibus accounts where your personal
        coverage depends on recordkeeping details you cannot see — ask for the arrangement in
        writing. Bank mergers deserve prompt review: when your two banks become one, previously
        separate limits combine, though regulators typically grant a grace period of continued
        separate coverage (often around six months for most account types). Calendar a coverage
        check after any merger notice rather than assuming the grace period protects you forever.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Frequently asked questions</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">How do I check if my bank is FDIC-insured?</h3>
          <p className="mt-2">
            Use the FDIC&apos;s BankFind tool online and look for the official FDIC sign at
            branches and on the bank&apos;s website. Be wary of lookalike language —
            &ldquo;banking services provided by&rdquo; a partner bank means your coverage depends
            on that partner and the titling arrangement.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">What happens if my bank fails?</h3>
          <p className="mt-2">
            The FDIC typically arranges an acquiring bank to assume insured deposits, often with
            access restored by the next business day, or issues payment directly. Amounts above
            insurance limits may be partially recovered through the receivership process — slowly
            and uncertainly, which is why staying within limits matters.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Do different branches count as different banks?</h3>
          <p className="mt-2">
            No. All branches of one chartered bank share a single limit, and mergers can combine
            previously separate limits — after your banks merge, review coverage promptly since
            temporary extended coverage after mergers eventually expires.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="font-semibold text-white">Is the $250,000 limit changing?</h3>
          <p className="mt-2">
            Proposals surface periodically, but as of October 2026 the standard maximum remains
            $250,000 per depositor, per bank, per ownership category. Verify against FDIC.gov
            before acting on any headline claiming otherwise.
          </p>
        </div>
      </div>

      <p className="mt-10 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
        General education, not financial advice. Confirm your bank&apos;s insured status and model
        complex balances with the FDIC&apos;s EDIE tool. Read our full{" "}
        <Link href="/disclaimer" className="underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
