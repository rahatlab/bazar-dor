import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4 py-20 text-center">
      <p className="text-6xl font-bold text-base-content/30">৪০৪</p>
      <h1 className="text-xl font-bold">পেজটি খুঁজে পাওয়া যায়নি</h1>
      <p className="text-sm text-base-content/60">
        আপনি যে ঠিকানায় গেছেন সেটি সম্ভবত সরিয়ে ফেলা হয়েছে অথবা ঠিককরা নয়।
      </p>
      <Link href="/" className="btn btn-primary">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
