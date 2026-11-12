"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateForm({ currentName }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = new FormData(e.currentTarget).get("name");

    if (!name?.trim()) {
      toast.error("নাম দিন");
      return;
    }

    setLoading(true);
    const { error } = await authClient.updateUser({ name: name.trim() });
    setLoading(false);

    if (error) {
      toast.error(error.message || "আপডেট করা যায়নি");
      return;
    }

    toast.success("তথ্য আপডেট হয়েছে");
    router.push("/profile");
    router.refresh();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-base-300 bg-base-100 p-6"
    >
      <label className="block space-y-1.5">
        <span className="text-sm font-medium">নাম</span>
        <input
          type="text"
          name="name"
          defaultValue={currentName}
          placeholder="আপনার পুরো নাম"
          className="input w-full"
          autoComplete="name"
        />
      </label>
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={loading}
      >
        {loading && <span className="loading loading-spinner loading-xs" />}
        তথ্য আপডেট করুন
      </button>
    </form>
  );
}
