"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function LogoutButton({
  className = "btn btn-error btn-outline",
  label = "সাইন আউট",
}) {
  const router = useRouter();

  const onLogout = async () => {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error(error.message || "সাইন আউট করা যায়নি");
      return;
    }
    toast.success("সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  };

  return (
    <button type="button" onClick={onLogout} className={className}>
      {label}
    </button>
  );
}
