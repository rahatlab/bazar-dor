"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import UserMenu from "./UserMenu";

// Session client-e load hoy — Navbar static thake, hydration por swap hobe
export default function AuthSection() {
  const { data: session } = authClient.useSession();

  if (session?.user) return <UserMenu user={session.user} />;

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
