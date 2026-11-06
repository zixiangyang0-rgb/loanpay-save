import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LoanPay Save",
  description:
    "Learn what save.loanpaylogic.com covers: free educational US guides to savings accounts, CDs, bank bonuses, and budgeting systems.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">About save.loanpaylogic.com</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        LoanPay Save (save.loanpaylogic.com) explains United States saving and everyday
        banking in plain English. We publish in-depth guides covering
        high-yield savings accounts, certificates of deposit, money market accounts, Treasury
        bills and I bonds, bank account bonuses, emergency funds, and budgeting systems such as
        pay-yourself-first automation and sinking funds.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Our goal is to help readers build intuition before they move money: how compounding works,
        how FDIC insurance limits apply, how CD ladders balance yield and access, and how automatic
        transfers turn good intentions into balances that grow. Every page on
        save.loanpaylogic.com provides general education only and encourages readers to verify
        current rates and offers directly with banks, and to consult a qualified professional for
        personalized decisions.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Saving decisions often come down to small details: APY versus interest rate, monthly
        fees and minimum balance rules, withdrawal limits on money market accounts, early
        withdrawal penalties on CDs, and Treasury auction timing. Our guides compare these
        options side by side with checklists and worked dollar examples.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We are independent writers and developers, not financial advisors or attorneys. This site
        is part of the LoanPay Logic family and is supported by display advertising so guides
        can stay free to read. Advertising never influences our comparisons. Everything here is
        general education, not financial advice. Questions or corrections are welcome at
        support@loanpaylogic.com.
      </p>
      <section
        aria-label="Editorial byline and sources"
        className="glass-card mt-6 rounded-2xl p-6 sm:p-8"
      >
        <h2 className="text-lg font-semibold text-white">
          Who Wrote This Page and How We Check Our Facts
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was written by Sarah Mitchell, Senior Personal Finance Writer; reviewed for
          accuracy by David Chen, CPA, our independent fact-checking reviewer; and edited by Emily
          Roberts, Managing Editor. Together, this three-person team brings over 25 years of
          combined experience in financial education, certified public accounting, and digital
          publishing to every savings guide on this site, and each member signs off before it
          goes live for readers like you.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Our editorial process starts with primary public sources, including the Federal Deposit
          Insurance Corporation, the Consumer Financial Protection Bureau, Federal Reserve
          publications, and TreasuryDirect guidance on bills and savings bonds. We cross-check
          every figure against at least two independent sources, rewrite findings in original
          plain-English language, and never let advertising partners influence our conclusions.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          This page was last reviewed and updated on November 6, 2026. Rates, bonuses, and bank
          rules change frequently, so we re-check each guide regularly and fix errors promptly
          when readers write to support@loanpaylogic.com with the page URL.
        </p>
      </section>
    </div>
  );
}
