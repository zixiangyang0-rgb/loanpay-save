import type { MetadataRoute } from "next";

const BASE = "https://save.loanpaylogic.com";

const ROUTES: { url: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  // Accounts
  { url: "/high-yield-savings-guide-2026", priority: 0.9, changeFrequency: "monthly" },
  { url: "/money-market-vs-savings", priority: 0.8, changeFrequency: "monthly" },
  { url: "/high-yield-checking-accounts", priority: 0.8, changeFrequency: "monthly" },
  { url: "/joint-savings-accounts-guide", priority: 0.7, changeFrequency: "monthly" },
  { url: "/savings-for-kids-guide", priority: 0.7, changeFrequency: "monthly" },
  { url: "/bank-vs-credit-union", priority: 0.8, changeFrequency: "monthly" },
  { url: "/how-fdic-insurance-works", priority: 0.8, changeFrequency: "monthly" },
  // CDs & bonds
  { url: "/cd-ladder-strategy", priority: 0.9, changeFrequency: "monthly" },
  { url: "/cd-vs-high-yield-savings", priority: 0.9, changeFrequency: "monthly" },
  { url: "/no-penalty-cd-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/brokered-cds-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/treasury-bills-vs-cds", priority: 0.8, changeFrequency: "monthly" },
  { url: "/i-bonds-explained-2026", priority: 0.8, changeFrequency: "monthly" },
  { url: "/compounding-interest-explained", priority: 0.9, changeFrequency: "monthly" },
  // Bonuses
  { url: "/checking-account-bonuses-2026", priority: 0.8, changeFrequency: "monthly" },
  { url: "/savings-account-bonuses-guide", priority: 0.8, changeFrequency: "monthly" },
  // Emergency & goals
  { url: "/emergency-fund-how-much", priority: 0.9, changeFrequency: "monthly" },
  { url: "/where-to-keep-emergency-fund", priority: 0.8, changeFrequency: "monthly" },
  { url: "/529-plan-basics", priority: 0.7, changeFrequency: "monthly" },
  // Budgeting systems
  { url: "/sinking-funds-budgeting-guide", priority: 0.8, changeFrequency: "monthly" },
  { url: "/pay-yourself-first-automation", priority: 0.9, changeFrequency: "monthly" },
  { url: "/windfall-bonus-plan", priority: 0.7, changeFrequency: "monthly" },
  { url: "/how-to-save-10000-in-a-year", priority: 0.9, changeFrequency: "monthly" },
  { url: "/50-30-20-budget-rule", priority: 0.8, changeFrequency: "monthly" },
  { url: "/savings-challenges-52-week", priority: 0.7, changeFrequency: "monthly" },
  // Legal pages
  { url: "/about", priority: 0.5, changeFrequency: "monthly" },
  { url: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { url: "/privacy-policy", priority: 0.4, changeFrequency: "monthly" },
  { url: "/terms", priority: 0.4, changeFrequency: "monthly" },
  { url: "/disclaimer", priority: 0.4, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-01");
  return ROUTES.map((route) => ({
    url: `${BASE}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
