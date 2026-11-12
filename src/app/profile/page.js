import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function ProfilePage() {
  const session = await auth.api
    .getSession({ headers: await headers() })
    .catch(() => null);
  if (!session) redirect("/signin?reason=protected");

  const user = session.user;
  const initial = (user.name || user.email || "?").trim()[0].toUpperCase();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold">আপনার প্রোফাইল</h1>
        <p className="text-sm text-base-content/60">
          আপনার অ্যাকাউন্টের তথ্য দেখুন ও পরিবর্তন করুন
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {user.image ? (
            <Image
              src={user.image}
              alt=""
              width={56}
              height={56}
              className="size-14 rounded-full object-cover"
            />
          ) : (
            <span className="flex size-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-content">
              {initial}
            </span>
          )}
          <div>
            <p className="font-bold">{user.name}</p>
            <p className="text-sm text-base-content/60">{user.email}</p>
          </div>
        </div>
        <Link
          href="/profile/update"
          className="btn btn-error btn-outline btn-sm"
        >
          তথ্য আপডেট করুন
        </Link>
      </div>

      <div className="space-y-3 rounded-2xl border border-base-300 bg-base-100 p-6">
        <h2 className="font-bold">লগ আউট</h2>
        <LogoutButton className="btn btn-primary w-full" label="লগ আউট" />
      </div>
    </div>
  );
}
