import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "../components/AdSlot";
import { OrganizationJsonLd } from "../lib/schema";

export const metadata: Metadata = {
  title: "LoanPay Save | High-Yield Savings, CDs & Budgeting Guides",
  description:
    "Free educational guides to high-yield savings accounts, CDs, bank bonuses, emergency funds, and budgeting systems that make saving automatic.",
  alternates: {
    canonical: "https://save.loanpaylogic.com/",
  },
};

type Card = { title: string; description: string; href: string; badge: string };
type Cluster = { id: string; heading: string; blurb: string; cards: Card[] };

const clusters: Cluster[] = [
  {
    id: "accounts",
    heading: "A · Savings accounts",
    blurb: "High-yield savings, money markets, checking that pays, and how insurance protects it all.",
    cards: [
      {
        title: "High-Yield Savings Guide 2026",
        description: "How online savings accounts pay more — and how to pick one without chasing teasers.",
        href: "/high-yield-savings-guide-2026",
        badge: "Guide",
      },
      {
        title: "Money Market vs. Savings",
        description: "Check-writing, debit cards, and rates: which liquid account fits your cash?",
        href: "/money-market-vs-savings",
        badge: "Compare",
      },
      {
        title: "High-Yield Checking Accounts",
        description: "Checking that pays interest: requirements, caps, and when it beats savings.",
        href: "/high-yield-checking-accounts",
        badge: "Guide",
      },
      {
        title: "Joint Savings Accounts Guide",
        description: "Couples and partners: ownership, insurance, and rules that prevent fights.",
        href: "/joint-savings-accounts-guide",
        badge: "Guide",
      },
      {
        title: "Savings for Kids Guide",
        description: "Custodial accounts, kids' savings, and teaching compounding early.",
        href: "/savings-for-kids-guide",
        badge: "Guide",
      },
      {
        title: "Bank vs. Credit Union",
        description: "Rates, fees, branches, and NCUA vs. FDIC insurance compared honestly.",
        href: "/bank-vs-credit-union",
        badge: "Compare",
      },
      {
        title: "How FDIC Insurance Works",
        description: "$250,000 per depositor, per bank, per category — with stacking examples.",
        href: "/how-fdic-insurance-works",
        badge: "Guide",
      },
    ],
  },
  {
    id: "cds",
    heading: "B · CDs & bonds",
    blurb: "Lock in yield with ladders, no-penalty CDs, brokered CDs, T-bills, and I bonds.",
    cards: [
      {
        title: "CD Ladder Strategy",
        description: "Split money across terms so yield rises and cash frees up every few months.",
        href: "/cd-ladder-strategy",
        badge: "Strategy",
      },
      {
        title: "CD vs. High-Yield Savings",
        description: "Locked rate vs. flexibility: the math that decides where each dollar goes.",
        href: "/cd-vs-high-yield-savings",
        badge: "Compare",
      },
      {
        title: "No-Penalty CD Guide",
        description: "CD yield with a savings-like exit: how the early-withdrawal window works.",
        href: "/no-penalty-cd-guide",
        badge: "Guide",
      },
      {
        title: "Brokered CDs Guide",
        description: "Buy CDs inside a brokerage: pricing, liquidity, and call-risk fine print.",
        href: "/brokered-cds-guide",
        badge: "Guide",
      },
      {
        title: "Treasury Bills vs. CDs",
        description: "State-tax-free T-bills against FDIC-insured CDs — after-tax math included.",
        href: "/treasury-bills-vs-cds",
        badge: "Compare",
      },
      {
        title: "I Bonds Explained 2026",
        description: "$10,000 annual limit, inflation resets, 12-month lock: the full mechanics.",
        href: "/i-bonds-explained-2026",
        badge: "Guide",
      },
      {
        title: "Compounding Interest Explained",
        description: "Why time beats timing — with an interactive growth estimator.",
        href: "/compounding-interest-explained",
        badge: "Guide",
      },
    ],
  },
  {
    id: "bonuses",
    heading: "C · Bank bonuses",
    blurb: "Checking and savings promotions: requirements, taxes, and bonus-churning math.",
    cards: [
      {
        title: "Checking Account Bonuses 2026",
        description: "Direct-deposit hurdles, holding periods, and how to value a bonus in dollars per hour.",
        href: "/checking-account-bonuses-2026",
        badge: "Guide",
      },
      {
        title: "Savings Account Bonuses Guide",
        description: "Deposit-tier bonuses, balance holds, and stacking with high base rates.",
        href: "/savings-account-bonuses-guide",
        badge: "Guide",
      },
    ],
  },
  {
    id: "systems",
    heading: "D · Budgeting systems",
    blurb: "Emergency funds, college savings, and automatic systems that build balances on autopilot.",
    cards: [
      {
        title: "Emergency Fund: How Much?",
        description: "3 vs. 6 vs. 12 months: size your cushion to your job risk and deductibles.",
        href: "/emergency-fund-how-much",
        badge: "Guide",
      },
      {
        title: "Where to Keep Emergency Fund",
        description: "Accessible but separate: tiering cash across savings, T-bills, and I bonds.",
        href: "/where-to-keep-emergency-fund",
        badge: "Guide",
      },
      {
        title: "529 Plan Basics",
        description: "Tax-free growth for education: contributions, state perks, and secure 2.0 flex.",
        href: "/529-plan-basics",
        badge: "Guide",
      },
      {
        title: "Sinking Funds Budgeting Guide",
        description: "Save monthly for car repairs, holidays, and insurance before the bill lands.",
        href: "/sinking-funds-budgeting-guide",
        badge: "System",
      },
      {
        title: "Pay Yourself First Automation",
        description: "Auto-transfers on payday: the one setup that outperforms every budget app.",
        href: "/pay-yourself-first-automation",
        badge: "System",
      },
      {
        title: "Windfall & Bonus Plan",
        description: "Tax refunds, bonuses, gifts: a split rule so windfalls build wealth, not clutter.",
        href: "/windfall-bonus-plan",
        badge: "Guide",
      },
      {
        title: "How to Save $10,000 in a Year",
        description: "$834 a month broken into weekly moves, cuts, and automations that stick.",
        href: "/how-to-save-10000-in-a-year",
        badge: "Plan",
      },
      {
        title: "50-30-20 Budget Rule",
        description: "Needs, wants, savings: adapt the classic split to high-cost cities and low incomes.",
        href: "/50-30-20-budget-rule",
        badge: "System",
      },
      {
        title: "52-Week Savings Challenge",
        description: "The $1,378 challenge plus reverse and biweekly twists that actually finish.",
        href: "/savings-challenges-52-week",
        badge: "Challenge",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16">
      <section className="glass-panel page-aurora rounded-3xl px-8 py-14 text-center sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
          save.loanpaylogic.com
        </p>
        <h1 className="hero-title mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          Make Your Savings Work as Hard as You Do
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          LoanPay Save explains American saving in plain English: high-yield accounts, CD ladders,
          Treasury options, bank bonuses, emergency funds, and budgeting systems that run on
          autopilot — no signup required.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/high-yield-savings-guide-2026"
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
          >
            Start with high-yield savings
          </Link>
          <Link
            href="/pay-yourself-first-automation"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30"
          >
            Automate your saving
          </Link>
        </div>
      </section>

      <AdSlot format="display" slot="TODO-save-display-1" />

      {clusters.map((cluster) => (
        <section key={cluster.id} className="mt-12">
          <h2 className="text-2xl font-bold">{cluster.heading}</h2>
          <p className="mt-2 text-sm text-slate-400">{cluster.blurb}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cluster.cards.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="glass-card block rounded-2xl p-6 transition hover:border-amber-200/30"
              >
                <span className="inline-block rounded-full border border-amber-200/30 px-3 py-1 text-xs font-medium text-amber-200">
                  {tool.badge}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="glass-card mt-12 rounded-2xl p-8">
        <h2 className="text-2xl font-bold">Why a savings strategy beats a savings account</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Most Americans keep cash in a checking account earning almost nothing, while online
          savings accounts, CDs, and Treasury bills pay meaningfully more for the same
          government-backed safety. But the account is only half the story: automatic transfers,
          sinking funds for irregular bills, and a right-sized emergency fund decide whether extra
          yield actually turns into wealth. The guides on save.loanpaylogic.com pair both halves —
          where to park cash and the systems that keep it growing — with worked examples you can
          follow line by line.
        </p>
        <p className="mt-4 rounded-xl border border-amber-200/20 bg-amber-200/5 p-4 text-xs leading-relaxed text-amber-100/90">
          General education only, not financial advice. Rates, bonuses, and account terms change
          often — verify current offers directly with each institution before moving money. Read
          our full{" "}
          <Link href="/disclaimer" className="underline underline-offset-2">
            disclaimer
          </Link>
          .
        </p>
      </section>
      <OrganizationJsonLd />
    </div>
  );
}
