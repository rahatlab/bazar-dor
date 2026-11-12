import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getProducts } from "@/lib/api";
import { formatPrice, unitBn } from "@/lib/bangla";
import ChangeBadge from "@/components/ChangeBadge";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  // Protected route — na thakle signin-e + oikhane toast
  const session = await auth.api
    .getSession({ headers: await headers() })
    .catch(() => null);
  if (!session) redirect("/signin?reason=protected");

  const products = await getProducts().catch(() => []);
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  const prices = p.markets.flatMap((m) => [m.min, m.max]);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const avgPrice = Math.round(prices.reduce((s, v) => s + v, 0) / prices.length);

  const priceBoxes = [
    { label: "সর্বনিম্ন দাম", value: minPrice, color: "text-success" },
    { label: "সর্বোচ্চ দাম", value: maxPrice, color: "text-error" },
    { label: "গড় দাম", value: avgPrice, color: "text-base-content" },
  ];

  return (
    <div className="space-y-6">
      <nav className="text-sm text-base-content/60" aria-label="ব্রেডক্রাম">
        <Link href="/" className="hover:text-primary">
          হোম
        </Link>
        {" / "}
        <Link href={`/category/${p.category}`} className="hover:text-primary">
          {p.categoryNameBn}
        </Link>
        {" / "}
        <span className="text-base-content">{p.nameBn}</span>
      </nav>

      {/* Summary */}
      <div className="flex flex-col gap-6 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span
            className="flex size-16 shrink-0 items-center justify-center rounded-full bg-base-200 text-4xl"
            aria-hidden
          >
            {p.image}
          </span>
          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold">{p.nameBn}</h1>
            <p className="text-sm text-base-content/60">
              আজকের বাজারে সর্বশেষ দাম ও পরিবর্তন — {p.categoryNameBn}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-outline">
                {p.categoryIcon} {p.categoryNameBn}
              </span>
              <span className="badge badge-ghost">{unitBn(p.unit)}</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-primary/20 bg-primary/10 px-6 py-4 text-center sm:text-right">
          <p className="text-xs text-base-content/60">সর্বশেষ দাম</p>
          <p className="text-2xl font-bold">{formatPrice(p.today)} টাকা</p>
          <ChangeBadge change={p.change} className="text-sm font-medium" />
        </div>
      </div>

      {/* Price summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        {priceBoxes.map((b) => (
          <div
            key={b.label}
            className="rounded-xl border border-base-300 bg-base-100 p-5 text-center"
          >
            <p className="text-sm text-base-content/60">{b.label}</p>
            <p className={`text-2xl font-bold ${b.color}`}>
              {formatPrice(b.value)} টাকা
            </p>
          </div>
        ))}
      </div>

      {/* বাজারভিত্তিক আজকের দাম */}
      <div className="rounded-2xl border border-base-300 bg-base-100 p-6">
        <h2 className="mb-4 font-bold">বাজারভিত্তিক আজকের দাম</h2>
        <div className="overflow-x-auto">
          <table className="table text-sm">
            <thead>
              <tr>
                <th>বাজার</th>
                <th>বিভাগ</th>
                <th className="text-right">নিম্ন দাম</th>
                <th className="text-right">সর্বোচ্চ দাম</th>
                <th className="text-right">গড় দাম</th>
              </tr>
            </thead>
            <tbody>
              {p.markets.map((m) => (
                <tr key={m.market}>
                  <td className="font-medium">{m.market}</td>
                  <td className="text-base-content/70">{m.division}</td>
                  <td className="text-right">{formatPrice(m.min)} টাকা</td>
                  <td className="text-right">{formatPrice(m.max)} টাকা</td>
                  <td className="text-right">
                    {formatPrice(Math.round((m.min + m.max) / 2))} টাকা
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
