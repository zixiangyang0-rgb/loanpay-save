"use client";

import { useMemo, useState } from "react";

export default function CompoundEstimator() {
  const [principal, setPrincipal] = useState(5000);
  const [monthly, setMonthly] = useState(300);
  const [rate, setRate] = useState(4);
  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    let balance = principal;
    let contributed = principal;
    for (let i = 0; i < n; i++) {
      balance = balance * (1 + r) + monthly;
      contributed += monthly;
    }
    return { balance, contributed, interest: balance - contributed };
  }, [principal, monthly, rate, years]);

  const fmt = (v: number) =>
    v.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <div className="glass-card mt-4 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white">Try it: compound-growth estimator</h3>
      <p className="mt-1 text-xs text-slate-400">
        Illustrative education only — not a prediction of any account&apos;s rate. Verify current offers separately.
      </p>
      <div className="mt-5 space-y-5 text-sm text-slate-300">
        <label className="block">
          <span className="flex justify-between">
            <span>Starting balance</span>
            <span className="font-semibold text-white">${fmt(principal)}</span>
          </span>
          <input
            type="range"
            min={0}
            max={50000}
            step={500}
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="mt-2"
          />
        </label>
        <label className="block">
          <span className="flex justify-between">
            <span>Monthly deposit</span>
            <span className="font-semibold text-white">${fmt(monthly)}</span>
          </span>
          <input
            type="range"
            min={0}
            max={2000}
            step={25}
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="mt-2"
          />
        </label>
        <label className="block">
          <span className="flex justify-between">
            <span>Illustrative annual rate (APY)</span>
            <span className="font-semibold text-white">{rate.toFixed(1)}%</span>
          </span>
          <input
            type="range"
            min={0}
            max={10}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-2"
          />
        </label>
        <label className="block">
          <span className="flex justify-between">
            <span>Years</span>
            <span className="font-semibold text-white">{years}</span>
          </span>
          <input
            type="range"
            min={1}
            max={40}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="mt-2"
          />
        </label>
      </div>
      <div className="mt-6 grid gap-3 text-center sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-400">You put in</p>
          <p className="mt-1 text-xl font-bold text-white">${fmt(result.contributed)}</p>
        </div>
        <div className="rounded-xl border border-amber-200/30 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-400">Grows to</p>
          <p className="mt-1 text-xl font-bold text-amber-200">${fmt(result.balance)}</p>
        </div>
        <div className="rounded-xl border border-white/10 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-400">Interest earned</p>
          <p className="mt-1 text-xl font-bold text-white">${fmt(result.interest)}</p>
        </div>
      </div>
    </div>
  );
}
