"use client";

import { useEffect, useState } from "react";
import { banglaDate } from "@/lib/bangla";

// Client-ei date count kore — static build-e build-date thakis na
export default function BanglaDate() {
  const [date, setDate] = useState("");
  useEffect(() => setDate(banglaDate()), []);
  return (
    <span className="text-xs text-base-content/60">{date}</span>
  );
}
