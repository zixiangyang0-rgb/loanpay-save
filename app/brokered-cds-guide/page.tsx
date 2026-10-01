import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../../components/AdSlot";
import { ArticleJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Brokered CDs Guide: Buying CDs at a Brokerage | LoanPay Save",
  description:
    "Brokered certificates of deposit in 2026: how brokerage CDs price, secondary-market liquidity, call risk, and FDIC coverage across banks.",
  alternates: {
    canonical: "https://save.loanpaylogic.com/brokered-cds-guide",
  },
};

export default function BrokeredCdsGuidePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-8">
      <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">
        Updated: October 2026 · CDs & bonds
      </p>
      <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        Brokered CDs: Shop Every Bank&apos;s Rates From One Account
      </h1>
      <p className="mt-3 text-xs text-slate-400">
        By <span className="font-semibold text-slate-200">LoanPay Save Editorial Team</span> · Updated October 2026 · General education, not financial advice.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        A brokered CD is a bank certificate of deposit bought through a brokerage — Fidelity,
        Schwab, Vanguard, or similar — instead of directly from the issuing bank. The underlying
        promise is identical (fixed rate, fixed term, FDIC-insured up to limits), but the wrapper
        changes everything: you can compare dozens of banks&apos; CDs on one screen, hold CDs from
        many issuers in a single account, and resell on a secondary market rather than paying an
        early-withdrawal penalty. The tradeoff is market-price risk before maturity and the
        notorious call feature that lets some issuers redeem early when rates fall. This guide
        explains pricing, liquidity, call risk, and how to use brokered CDs well.
      </p>

      <h2 className="mt-10 text-2xl font-bold">How brokered CDs differ from bank CDs</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        With a bank CD, you have a direct relationship: the bank sets the penalty schedule and
        honors early withdrawals (at a price). With a brokered CD, your contract is with the
        market — there is generally no early-withdrawal option at all. To exit early you sell to
        another investor at the prevailing market price, which rises when rates fall and drops
        when rates rise. Sell a 5-year brokered CD one year in after a one-point rate jump and you
        might receive 96 cents on the dollar — a larger haircut than most bank penalties. Hold to
        maturity and none of this matters: you receive full principal plus contracted interest
        regardless of the market&apos;s interim opinions. Interest mechanics differ too: many
        brokered CDs pay out monthly or semiannually to your cash sweep rather than compounding
        inside the CD, so the stated yield assumes you reinvest those payments yourself.
      </p>

      <AdSlot format="in-article" slot="TODO-save-inarticle-1" />
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        FDIC insurance still applies — each issuing bank&apos;s CDs count toward your $250,000
        limit at that bank, aggregated across everything you hold from that issuer including
        direct deposits. Brokerages display the issuer name precisely so you can track exposure,
        and spreading $500,000 across three issuers keeps every dollar covered without opening
        three bank accounts. SIPC coverage at the brokerage protects against brokerage failure,
        not CD default — the two insurances cover different risks, and FDIC is the one backing
        your CD principal. Minimums are typically $1,000 face value in $1,000 increments, and
        newly issued (new-issue) CDs usually carry no commission, while secondary-market purchases
        embed a markup in the price.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Bank CDs vs. brokered CDs</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
              <th className="px-4 py-3">Feature</th>
              <th className="px-4 py-3">Bank CD</th>
              <th className="px-4 py-3">Brokered CD</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Early exit</td>
              <td className="px-4 py-3">Penalty of 90–365 days interest, principal largely safe</td>
              <td className="px-4 py-3">Sell at market price — can be above or below principal</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Rate shopping</td>
              <td className="px-4 py-3">One bank at a time; many applications</td>
              <td className="px-4 py-3">Dozens of issuers on one screen, one account</td>
            </tr>
            <tr className="border-b border-white/5">
              <td className="px-4 py-3 font-semibold text-white">Call risk</td>
              <td className="px-4 py-3">Rare on standard CDs</td>
              <td className="px-4 py-3">Common — check &ldquo;callable&rdquo; flag before buying</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-white">Interest handling</td>
              <td className="px-4 py-3">Usually compounds inside the CD</td>
              <td className="px-4 py-3">Often paid out to cash sweep; reinvest manually</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold">Worked example: the callable-CD trap</h2>
      <div className="glass-card mt-4 rounded-2xl p-6">
        <p className="text-sm leading-relaxed text-slate-300">
          Two illustrative 5-year offerings: a non-callable brokered CD at 4.20% and a callable one
          at 4.60% (callable after one year). On $20,000 held the full term, the non-callable pays
          about <strong className="text-white">$4,200</strong> total interest versus{" "}
          <strong className="text-white">$4,600</strong> for the callable — a $400 headline edge.
          But if rates fall a point in year one, the issuer calls the 4.60% CD, returning your
          $20,000 plus ~$920 of first-year interest — and your reinvestment options now pay ~3.60%,
          leaving roughly <strong className="text-white">$3,700</strong> of remaining-term
          earnings versus the $3,280+ the non-callable still guarantees at its locked rate. The
          callable CD exhibits the worst trait in fixed income: your upside is capped (called away
          when rates fall) while your downside is fully yours (stuck holding when rates rise). As a
          rule, demand a meaningful yield premium for any callable CD — or simply filter for
          non-callable issues, which most brokerages let you do with one checkbox. (Yields
          illustrative — check current inventory.)
        </p>

      <AdSlot format="display" slot="TODO-save-display-2" />
      </div>

      <h2 className="mt-10 text-2xl font-bold">Using brokered CDs well</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Stick to new-issue, non-callable CDs from distinct issuers when building a ladder — the
        pricing is cleanest and the outcomes certain. Match maturities to genuine spending dates
        (a 2028 house purchase pairs with CDs maturing in early 2028) and treat brokered CDs as
        hold-to-maturity instruments; the secondary market is an emergency exit, not a trading
        strategy. Track each issuer against your FDIC exposure, remembering that direct deposits
        at the same bank aggregate with brokered holdings. At maturity, principal lands in your
        sweep account automatically with no grace-period gymnastics — redeploy it in minutes. For
        money you might genuinely need early, bank CDs with known penalties or no-penalty variants
        remain the better choice, because their worst case is defined in advance rather than
        discovered in a market quote.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Reading a brokered-CD listing like a pro</h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">
        Every listing shows the same critical fields — learn to scan them in seconds. Coupon and
        yield-to-maturity should match on new issues (a gap signals pricing above or below par);
        quantity minimums reveal whether small rungs are feasible; the callable flag with its
        first call date tells you whether the rate is truly locked; and the issuer name drives
        your FDIC-exposure tracking. Settlement dates matter more than beginners expect: new
        issues can settle weeks after purchase, during which your cash sits in sweep earning less
        — factor the dead days into effective yield on short terms. Finally, compare the
        brokered yield against direct-bank CDs of the same term before clicking buy; brokered
        inventory wins on convenience and multi-bank comparison, but standout bank promotions
        periodically beat it, especially on odd terms like 9 or 15 months that brokered desks
        stock thinly.
      </p>

            <AdSlot format="multiplex" slot="TODO-save-multiplex-1" />

      <h2 className="mt-10 text-2xl font-bold">Frequently asked questions</h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-300">
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">Do brokered CDs compound?</summary>
          <p className="mt-2">Often not automatically — coupon payments typically flow to your brokerage cash sweep,
            where they earn the sweep rate until you reinvest. Your realized return depends on what
            you do with those payments, so set sweep reinvestment or a manual routine.</p>
        </details>
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">What does &ldquo;callable&rdquo; mean exactly?</summary>
          <p className="mt-2">The issuing bank may redeem the CD before maturity on specified dates, usually when
            falling rates let it refinance cheaper. You get principal plus accrued interest — but
            lose the above-market rate going forward. Non-callable CDs cannot be taken back early.</p>
        </details>
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">Are brokered CDs safe if my brokerage fails?</summary>
          <p className="mt-2">Your CD is an obligation of the issuing bank, FDIC-insured to limits — brokerage
            failure does not erase it, and assets transfer to another firm. SIPC covers missing
            securities at a failed brokerage, a separate backstop you should rarely need.</p>
        </details>
        <details className="glass-card rounded-2xl p-5">
          <summary className="cursor-pointer font-semibold text-white">Can I ladder brokered CDs?</summary>
          <p className="mt-2">Yes, beautifully — buy 1- through 5-year new-issue CDs in one session and roll each
            maturity into a new longest rung. One login, one tax form, automatic maturity
            proceeds. Just keep every rung non-callable and from issuers within your FDIC headroom.</p>
        </details>
      </div>

      <p className="mt-10 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
        General education, not financial advice. Inventory and yields change daily — verify current
        offerings and read each CD&apos;s call and settlement terms. Read our full{" "}
        <Link href="/disclaimer" className="underline underline-offset-2">
          disclaimer
        </Link>
        .
      </p>
      <ArticleJsonLd
        slug="/brokered-cds-guide"
        title="Brokered CDs Guide: Buying CDs at a Brokerage | LoanPay Save"
        description="Brokered certificates of deposit in 2026: how brokerage CDs price, secondary-market liquidity, call risk, and FDIC coverage across banks."
      />
      <FaqJsonLd
        items={[
          { question: "Do brokered CDs compound?", answer: "Often not automatically — coupon payments typically flow to your brokerage cash sweep, where they earn the sweep rate until you reinvest. Your realized return depends on what you do with those payments, so set sweep reinvestment or a manual routine." },
          { question: "What does 'callable' mean exactly?", answer: "The issuing bank may redeem the CD before maturity on specified dates, usually when falling rates let it refinance cheaper. You get principal plus accrued interest — but lose the above-market rate going forward. Non-callable CDs cannot be taken back early." },
          { question: "Are brokered CDs safe if my brokerage fails?", answer: "Your CD is an obligation of the issuing bank, FDIC-insured to limits — brokerage failure does not erase it, and assets transfer to another firm. SIPC covers missing securities at a failed brokerage, a separate backstop you should rarely need." },
          { question: "Can I ladder brokered CDs?", answer: "Yes, beautifully — buy 1- through 5-year new-issue CDs in one session and roll each maturity into a new longest rung. One login, one tax form, automatic maturity proceeds. Just keep every rung non-callable and from issuers within your FDIC headroom." }
        ]}
      />
      <BreadcrumbJsonLd slug="/brokered-cds-guide" title="Brokered CDs Guide: Buying CDs at a Brokerage" />

    </div>
  );
}
