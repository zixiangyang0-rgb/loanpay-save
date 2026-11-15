"use client";

import { useState } from "react";

type GoalId = "emergency" | "car" | "home";

const GOALS: Array<{ id: GoalId; label: string; detail: string; targetId: string }> = [
  {
    id: "emergency",
    label: "Emergency",
    detail: "3–6 months essentials",
    targetId: "systems",
  },
  {
    id: "car",
    label: "Car down payment",
    detail: "Sinking funds + automation",
    targetId: "systems",
  },
  {
    id: "home",
    label: "Home deposit",
    detail: "CD ladder + high-yield",
    targetId: "cds",
  },
];

export default function GoalRail() {
  const [active, setActive] = useState<GoalId>("emergency");

  function pick(id: GoalId, targetId: string) {
    setActive(id);
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <aside
      aria-label="Goal rail"
      style={{
        background: "#FFFFFF",
        border: "1px solid #CBD5C6",
        borderRadius: 14,
        padding: 10,
        alignSelf: "start",
      }}
    >
      {GOALS.map((g) => (
        <button
          key={g.id}
          type="button"
          data-goal={g.id}
          aria-pressed={active === g.id}
          onClick={() => pick(g.id, g.targetId)}
          style={{
            display: "block",
            width: "100%",
            textAlign: "left",
            border: 0,
            borderRadius: 10,
            padding: "13px 12px",
            cursor: "pointer",
            fontSize: 14,
            background: active === g.id ? "#1F2A22" : "transparent",
            color: active === g.id ? "#FFFFFF" : "#1F2A22",
          }}
        >
          {g.label}
          <span
            aria-hidden="true"
            style={{ display: "block", height: 6, borderRadius: 3, marginTop: 8, overflow: "hidden", background: "#E4E9E1" }}
          >
            <span style={{ display: "block", height: "100%", background: "#2F6B3C", width: active === g.id ? "65%" : "22%" }} />
          </span>
          <span style={{ display: "block", marginTop: 6, fontSize: 12, opacity: 0.75 }}>{g.detail}</span>
        </button>
      ))}
    </aside>
  );
}
