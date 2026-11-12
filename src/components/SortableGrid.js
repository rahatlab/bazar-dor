"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

// C1: sort numeric value-e — API price number, tai string sort-er risk nei
export default function SortableGrid({ products }) {
  const [sort, setSort] = useState("default");

  const sorted = [...products];
  if (sort === "asc") sorted.sort((a, b) => a.today - b.today);
  if (sort === "desc") sorted.sort((a, b) => b.today - a.today);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-base-content/60">
          আজ যা যা পাওয়া যাচ্ছে
        </p>
        <label className="flex items-center gap-2 text-sm">
          সাজান:
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-sm"
          >
            <option value="default">ডিফল্ট</option>
            <option value="asc">দাম: কম থেকে বেশি</option>
            <option value="desc">দাম: বেশি থেকে কম</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
