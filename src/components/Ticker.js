"use client";

import { formatPrice } from "@/lib/bangla";
import ChangeBadge from "./ChangeBadge";

// Infinite marquee: list 2 bar duplicate, -50% translate = seamless loop
export default function Ticker({ products = [] }) {
  if (!products.length) return null;
  const items = [...products, ...products];

  return (
    <div
      className="overflow-hidden border-y border-base-300 bg-base-100 py-2"
      aria-hidden
    >
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap text-sm">
        {items.map((p, i) => (
          <span key={i} className="flex items-center gap-2">
            <span aria-hidden>{p.image}</span>
            <span className="font-medium">{p.nameBn}</span>
            <span className="text-base-content/70">
              {formatPrice(p.today)} টাকা
            </span>
            <ChangeBadge change={p.change} />
          </span>
        ))}
      </div>
    </div>
  );
}
