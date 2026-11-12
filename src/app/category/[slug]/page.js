import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getProducts } from "@/lib/api";
import SortableGrid from "@/components/SortableGrid";

export async function generateStaticParams() {
  const categories = await getCategories().catch(() => []);
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const [categories, products] = await Promise.all([
    getCategories().catch(() => []),
    getProducts().catch(() => []),
  ]);

  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const items = products.filter((p) => p.category === slug);

  if (!items.length) {
    return (
      <div className="space-y-4 py-20 text-center">
        <p className="text-4xl" aria-hidden>
          🛒
        </p>
        <h1 className="text-xl font-bold">কোনো পণ্য পাওয়া যায়নি</h1>
        <p className="text-sm text-base-content/60">
          এই ক্যাটাগরিতে এখন কোনো পণ্য নেই অথবা লিংকটি সঠিক নয়।
        </p>
        <Link href="/" className="btn btn-primary">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-6">
        <span
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-base-200 text-3xl"
          aria-hidden
        >
          {category.icon}
        </span>
        <div>
          <h1 className="text-2xl font-bold">{category.nameBn}</h1>
          <p className="text-sm text-base-content/60">
            আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </header>

      <SortableGrid products={items} />
    </div>
  );
}
