"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pill = (active) =>
  `shrink-0 rounded-btn px-3 py-1.5 text-sm whitespace-nowrap ${
    active
      ? "bg-primary text-primary-content font-medium"
      : "text-base-content/70 hover:bg-base-200"
  }`;

export default function CategoryNav({ categories = [] }) {
  const pathname = usePathname();

  return (
    <nav className="border-t border-base-300 bg-base-100">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
        <Link href="/" className={pill(pathname === "/")}>
          সব
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className={pill(pathname === `/category/${c.slug}`)}
          >
            {c.icon} {c.nameBn}
          </Link>
        ))}
      </div>
    </nav>
  );
}
