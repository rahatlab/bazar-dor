"use client";

import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function UserMenu({ user }) {
  const initial = (user.name || user.email || "?").trim()[0].toUpperCase();

  return (
    <details className="dropdown dropdown-end">
      <summary className="btn btn-ghost btn-sm cursor-pointer gap-2 px-2">
        {user.image ? (
          <Image
            src={user.image}
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-full object-cover"
          />
        ) : (
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
            {initial}
          </span>
        )}
        <span className="hidden sm:inline">{user.name?.split(" ")[0]}</span>
        <span className="text-xs" aria-hidden>
          ▾
        </span>
      </summary>

      <ul className="menu dropdown-content z-50 mt-2 w-60 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg">
        <li className="menu-title pointer-events-none flex-col items-start">
          <span>{user.name}</span>
          <span className="truncate text-xs font-normal text-base-content/60">
            {user.email}
          </span>
        </li>
        <li>
          <Link href="/profile">👤 আমার প্রোফাইল</Link>
        </li>
        <li>
          <LogoutButton className="w-full text-left text-error" />
        </li>
      </ul>
    </details>
  );
}
