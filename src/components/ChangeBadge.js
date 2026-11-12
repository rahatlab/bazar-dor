import { formatPercent } from "@/lib/bangla";

const COLORS = {
  up: "text-error",
  down: "text-success",
  flat: "text-base-content/50",
};
const ARROW = { up: "▲", down: "▼", flat: "—" };

export default function ChangeBadge({ change, className = "" }) {
  const { dir, pct } = change;
  return (
    <span className={`${COLORS[dir] || COLORS.flat} ${className}`}>
      {ARROW[dir] || "—"} {formatPercent(Math.abs(pct))}%
    </span>
  );
}
