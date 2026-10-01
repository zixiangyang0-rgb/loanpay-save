"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "loanpay-save-consent";

// NOTE: This is a lightweight first-party consent banner. For full Google
// FundingChoices / TCF 2.2 compliance, connect a certified CMP in AdSense >
// Privacy & messaging > FundingChoices and replace this banner with the
// FundingChoices snippet. See: https://support.google.com/fundingchoices/answer/9180084
// When the user declines, we set non-personalized ads (npa=1) below.

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export function getConsent(): "accepted" | "declined" | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "accepted" || v === "declined") return v;
    return null;
  } catch {
    return null;
  }
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      setVisible(true);
    }
    // If previously declined, enforce non-personalized ads.
    if (getConsent() === "declined") {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({ requestNonPersonalizedAds: 1, npa: 1 });
      } catch {
        // ignore
      }
    }
  }, []);

  if (!visible) return null;

  const choose = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
      if (value === "declined") {
        // Declined => serve non-personalized ads only (npa=1).
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({ requestNonPersonalizedAds: 1, npa: 1 });
      }
    } catch {
      // storage unavailable — just hide banner
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur"
    >
      <p className="text-sm font-semibold text-white">We use cookies &amp; Google AdSense ads</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-300">
        We and Google use cookies to show ads, measure performance, and keep the site fast. Accept
        for personalized ads, or decline for non-personalized ads only. Read our{" "}
        <a href="/privacy-policy" className="underline underline-offset-2">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-amber-200"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose("declined")}
          className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold text-slate-100 transition hover:border-white/30"
        >
          Decline (non-personalized ads)
        </button>
      </div>
    </div>
  );
}
