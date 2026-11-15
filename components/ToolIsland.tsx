import type { ReactNode } from "react";

/**
 * ToolIsland — save-distinct quiet-goal island (dark, no light inversion).
 * Structure reuses guides/auto island frame read-only; visual tokens are save
 * quiet-goal: deep green-ink panel, leaf-tinted focus, DEMO badge. Wraps an
 * existing estimator WITHOUT touching its formula. Per-route distinct via
 * islandId + title + method props.
 */

type Props = {
  islandId: string;
  title: string;
  method: string;
  children: ReactNode;
};

export default function ToolIsland({ islandId, title, method, children }: Props) {
  return (
    <section
      data-tool-island={islandId}
      aria-label={title}
      style={{
        background: "linear-gradient(180deg, rgba(10, 26, 20, 0.96), rgba(6, 16, 12, 0.9))",
        border: "1px solid rgba(156, 199, 165, 0.28)",
        borderRadius: 12,
        padding: 20,
      }}
      className="s-tool mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9CC7A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07120D]"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 style={{ color: "#F7F4EE" }} className="text-base font-semibold">
          {title}
        </h3>
        <span
          style={{
            color: "#0B100D",
            background: "#9CC7A5",
            borderRadius: 4,
            fontVariantNumeric: "tabular-nums",
          }}
          className="px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em]"
        >
          Demo
        </span>
      </div>
      <p style={{ color: "#9DB4A6" }} className="mt-1 text-xs leading-relaxed">
        {method} Illustrative arithmetic only — not a rate, quote, or offer.
      </p>
      <div className="mt-3 [&_input]:focus-visible:outline-none [&_input]:focus-visible:ring-2 [&_input]:focus-visible:ring-[#9CC7A5] [&_input]:focus-visible:ring-offset-1 [&_input]:focus-visible:ring-offset-[#060F0B]">
        {children}
      </div>
      <style>{`@media (prefers-reduced-motion: reduce){.s-tool *{transition:none!important;transform:none!important}}`}</style>
    </section>
  );
}
