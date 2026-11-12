import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import UpdateForm from "@/components/UpdateForm";

export default async function UpdatePage() {
  const session = await auth.api
    .getSession({ headers: await headers() })
    .catch(() => null);
  if (!session) redirect("/signin?reason=protected");

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold">তথ্য আপডেট করুন</h1>
        <p className="text-sm text-base-content/60">
          নাম পরিবর্তন করে সেভ করুন
        </p>
      </div>
      <UpdateForm currentName={session.user.name} />
    </div>
  );
}
