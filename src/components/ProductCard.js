import Link from "next/link";
import { formatPrice, unitBn } from "@/lib/bangla";
import ChangeBadge from "./ChangeBadge";

export default function ProductCard({ product: p }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="block rounded-xl border border-base-300 bg-base-100 p-4 transition hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-base-200 text-xl"
          aria-hidden
        >
          {p.image}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-medium">{p.nameBn}</h3>
          <p className="text-xs text-base-content/60">{unitBn(p.unit)}</p>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between gap-2">
        <div>
          <p className="text-xs text-base-content/60">আজকের দাম</p>
          <p className="text-lg font-bold">{formatPrice(p.today)} টাকা</p>
        </div>
        <ChangeBadge change={p.change} className="text-sm font-medium" />
      </div>
    </Link>
  );
}
