import { banglaDate } from "@/lib/bangla";

// Server (build) theke client-e date alada hoy — hydration mismatch
// baje na, tai suppressHydrationWarning (date content-er standard pattern)
export default function BanglaDate() {
  return (
    <span className="text-xs text-base-content/60" suppressHydrationWarning>
      {banglaDate()}
    </span>
  );
}
