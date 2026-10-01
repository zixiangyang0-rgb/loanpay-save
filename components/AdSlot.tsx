"use client";

import { useEffect, useRef } from "react";

type AdFormat = "display" | "in-article" | "multiplex" | "anchor";

interface AdSlotProps {
  format: AdFormat;
  slot: string;
  className?: string;
}

const AD_CLIENT = "ca-pub-4906207495792820";

// TODO: Replace placeholder slot IDs with real AdSense ad unit IDs.
// Placeholders per page type:
// - Homepage display: TODO-save-display-1
// - Article in-article: TODO-save-inarticle-1
// - Article mid display: TODO-save-display-2
// - Article multiplex: TODO-save-multiplex-1
// Create matching ad units in AdSense > Ads > By ad unit, then swap IDs.
export default function AdSlot({ format, slot, className = "" }: AdSlotProps) {
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      const w = window as unknown as {
        adsbygoogle?: unknown[];
      };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      // AdSense not loaded yet (ad blocker / offline) — placeholder stays.
    }
  }, [slot]);

  if (process.env.NODE_ENV === "development") {
    return (
      <div
        aria-hidden="true"
        className={`flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] text-xs text-slate-500 ${className}`}
      >
        AdSlot [{format}] slot={slot} (dev placeholder)
      </div>
    );
  }

  if (format === "anchor") {
    return (
      <div className={`fixed inset-x-0 bottom-0 z-40 flex justify-center ${className}`}>
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%", minHeight: 90, textAlign: "center" }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  if (format === "in-article") {
    return (
      <div className={`my-8 overflow-hidden rounded-2xl ${className}`} style={{ minHeight: 250 }}>
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block", textAlign: "center" }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={slot}
          data-ad-layout="in-article"
          data-ad-format="fluid"
        />
      </div>
    );
  }

  if (format === "multiplex") {
    return (
      <div className={`my-8 overflow-hidden rounded-2xl ${className}`} style={{ minHeight: 250 }}>
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={AD_CLIENT}
          data-ad-slot={slot}
          data-ad-format="autorelaxed"
        />
      </div>
    );
  }

  // display (default)
  return (
    <div className={`my-8 overflow-hidden rounded-2xl ${className}`} style={{ minHeight: 280 }}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
