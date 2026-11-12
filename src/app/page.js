import Image from "next/image";
import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

function Hero() {
  return (
    <section className="rounded-2xl border border-base-300 bg-base-100 p-6 sm:p-8">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="flex-1 space-y-4">
          <span className="badge badge-outline badge-success">
            প্রতিদিন, ৮টি বাজার হয়ে আপডেট
          </span>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="max-w-xl text-sm text-base-content/70 sm:text-base">
            চাল, ডাল, তেল, মাছ, মাংস, ডিম ও আরও অনেক — বিভিন্ন বাজারভিত্তিক তুলনা,
            সর্বশেষ দাম বুঝে নিন আপনার প্রয়োজনীয় পণ্যের।
          </p>
          <a href="#সব-পণ্য" className="btn btn-primary">
            সব দাম দেখুন
          </a>
        </div>
        <Image
          src="/bazar-hero.png"
          alt="তাজা পণ্যের ঝুড়ি"
          width={360}
          height={270}
          className="w-full max-w-56 sm:max-w-72 md:max-w-none"
          priority
        />
      </div>
    </section>
  );
}

function ProductSection({ id, title, icon, iconColor, subtitle, items }) {
  if (!items.length) return null;

  return (
    <section id={id} className="space-y-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className={iconColor} aria-hidden>
            {icon}
          </span>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        {subtitle && (
          <p className="text-sm text-base-content/60">{subtitle}</p>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  );
}

export default async function Home() {
  const products = await getProducts().catch(() => []);

  const risers = [...products]
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
  const fallers = [...products]
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  if (!products.length) {
    return (
      <p className="py-20 text-center text-base-content/60">
        দাম আনা যায়নি — একটু পরে আবার দেখুন।
      </p>
    );
  }

  return (
    <div className="space-y-12">
      <Hero />

      <ProductSection
        title="আজ দাম বেড়েছে"
        icon="▲"
        iconColor="text-error"
        items={risers}
      />
      <ProductSection
        title="আজ দাম কমেছে"
        icon="▼"
        iconColor="text-success"
        items={fallers}
      />
      <ProductSection
        id="সব-পণ্য"
        title="সব পণ্য"
        subtitle="সব ধরনের পণ্য এক জায়গায়"
        items={products}
      />
    </div>
  );
}
