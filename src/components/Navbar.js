import Link from "next/link";
import { getCategories } from "@/lib/api";
import BanglaDate from "./BanglaDate";
import CategoryNav from "./CategoryNav";

export default async function Navbar() {
  const categories = await getCategories().catch(() => []);

  return (
    <header className="bg-base-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-6 text-primary-content"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold">বাজার দর</span>
            <BanglaDate />
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/signin" className="btn btn-ghost btn-sm">
            সাইন ইন
          </Link>
          <Link href="/signup" className="btn btn-primary btn-sm">
            সাইন আপ
          </Link>
        </div>
      </div>

      <CategoryNav categories={categories} />
    </header>
  );
}
