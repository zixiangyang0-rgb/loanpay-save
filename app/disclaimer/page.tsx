import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | LoanPay Save",
  description:
    "Disclaimer for save.loanpaylogic.com: general savings education only, not professional financial advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Everything published on save.loanpaylogic.com is for general education and illustration
        only. It is not financial advice, tax advice, legal advice, or investment advice, and it
        does not create a professional-client relationship.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Savings rates, bank bonuses, CD terms, Treasury rules, and tax treatment change
        frequently and depend on your income, debts, location, and timing. Our examples use
        illustrative numbers so you can follow the math — they are not promises of any current
        rate or offer. Before opening an account, moving savings, or buying securities, verify
        the current terms directly with the bank or TreasuryDirect, and consider speaking with a
        qualified financial professional.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        We work to keep guides accurate, but we make no warranty of completeness or timeliness. If
        you spot an error, please tell us at support@loanpaylogic.com so we can correct it.
      </p>
    </div>
  );
}
