"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  // Protected route theke ele toast — id stable rakhte double toast-er fix
  useEffect(() => {
    if (searchParams.get("reason") === "protected") {
      toast.error("পণ্যের পেজ দেখতে আগে সাইন ইন করুন", { id: "protected" });
    }
  }, [searchParams]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    if (!email || !password) {
      toast.error("ইমেইল ও পাসওয়ার্ড দিন");
      return;
    }

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) {
      toast.error(error.message || "সাইন ইন করা যায়নি");
      return;
    }

    toast.success("সাইন ইন সফল!");
    router.push("/");
    router.refresh();
  };

  const onSocial = async (provider) => {
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message || `${provider} দিয়ে সাইন ইন করা যায়নি`);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold">সাইন ইন</h1>
        <p className="text-sm text-base-content/60">
          বিভিন্ন বাজার, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে প্রবেশ করুন।
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-4 rounded-2xl border border-base-300 bg-base-200 p-6"
      >
        <label className="form-control block space-y-1.5">
          <span className="text-sm font-medium">ইমেইল</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="input w-full"
            autoComplete="email"
          />
        </label>

        <label className="form-control block space-y-1.5">
          <span className="text-sm font-medium">পাসওয়ার্ড</span>
          <input
            type="password"
            name="password"
            placeholder="আপনার পাসওয়ার্ড"
            className="input w-full"
            autoComplete="current-password"
          />
        </label>

        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading && <span className="loading loading-spinner loading-xs" />}
          সাইন ইন
        </button>

        <div className="divider text-xs text-base-content/50">অথবা</div>

        <button
          type="button"
          onClick={() => onSocial("google")}
          className="btn w-full gap-2 border border-base-300 bg-base-100 text-base-content hover:bg-base-200"
        >
          <span className="font-bold text-[#4285F4]">G</span>
          Google দিয়ে চালিয়ে যান
        </button>
        <button
          type="button"
          onClick={() => onSocial("github")}
          className="btn w-full gap-2 border border-base-300 bg-base-100 text-base-content hover:bg-base-200"
        >
          <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub দিয়ে চালিয়ে যান
        </button>

        <p className="text-center text-sm">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="font-medium text-success">
            সাইন আপ করুন
          </Link>
        </p>
      </form>

      <p className="text-center text-sm">
        <Link href="/" className="text-base-content/60 hover:text-primary">
          ← হোমে ফিরে যান
        </Link>
      </p>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
