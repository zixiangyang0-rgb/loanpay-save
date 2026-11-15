import type { ReactNode } from "react";

/**
 * LedgerTable — save-distinct comparison table frame (dark, quiet-goal).
 * Pattern reuses retire RetireTableScroll + insurance CoverageMatrix read-only:
 * scroll cue + region + tabIndex + sticky first col. Dark green-ink tokens,
 * NOT paper. Per-route distinct via `label` prop.
 */

type Props = {
  label: string;
  children: ReactNode;
};

export default function LedgerTable({ label, children }: Props) {
  return (
    <div data-ledger-table={label} className="s-ledger-block mt-4">
      <p aria-hidden="true" style={{ color: "#9DB4A6" }} className="text-xs">
        Scroll sideways to see all columns <span aria-hidden="true">→</span>
      </p>
      <div
        role="region"
        aria-label={label}
        tabIndex={0}
        style={{
          border: "1px solid rgba(156, 199, 165, 0.28)",
          borderRadius: 10,
          overflowX: "auto",
          background: "rgba(255,255,255,0.02)",
        }}
        className="s-ledger-wrap mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9CC7A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07120D]"
      >
        {children}
      </div>
      <style>{`.s-ledger-wrap table{width:100%;min-width:560px;text-align:left;font-size:14px;color:#E8EDE9;font-variant-numeric:tabular-nums;border-collapse:collapse}.s-ledger-wrap thead th{color:#9DB4A6;font-size:12px;text-transform:uppercase;letter-spacing:.06em}.s-ledger-wrap th,.s-ledger-wrap td{padding:12px 16px}.s-ledger-wrap tbody tr{border-top:1px solid rgba(156,199,165,.16)}.s-ledger-wrap tbody tr:hover{background:rgba(156,199,165,.06)}.s-ledger-wrap tbody th[scope="row"],.s-ledger-wrap tbody td:first-child{position:sticky;left:0;background:#0A1A14;z-index:1;box-shadow:1px 0 0 rgba(156,199,165,.28)}@media (prefers-reduced-motion: reduce){.s-ledger-block *{transition:none!important;transform:none!important}}`}</style>
    </div>
  );
}
