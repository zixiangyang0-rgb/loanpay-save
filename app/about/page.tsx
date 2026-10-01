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
        LoanPay Save is a small editorial project that explains United States saving and everyday
        banking in plain English. We publish in-depth guides covering high-yield savings accounts,
        certificates of deposit, money market accounts, Treasury bills and I bonds, bank account
        bonuses, emergency funds, and budgeting systems such as pay-yourself-first automation and
        sinking funds.
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
        We are independent writers and developers, not financial advisors or attorneys. Questions or
        corrections are welcome at support@loanpaylogic.com.
      </p>
    </div>
  );
}
