"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import UserMenu from "./UserMenu";

// Session client-e load hoy — Navbar static thake, hydration por swap hobe
export default function AuthSection() {
  const { data: session, isPending } = authClient.useSession();

  if (session?.user) return <UserMenu user={session.user} />;

  // Pending thakle logged-out button na dekhai skeleton (refresh-e flash-er fix)
  if (isPending) {
    return (
      <div className="flex items-center gap-2" aria-hidden>
        <span className="skeleton h-8 w-16" />
        <span className="skeleton h-8 w-16" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link href="/signin" className="btn btn-ghost btn-sm">
        সাইন ইন
      </Link>
      <Link href="/signup" className="btn btn-primary btn-sm">
        সাইন আপ
      </Link>
    </div>
  );
}
