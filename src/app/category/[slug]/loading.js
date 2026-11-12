import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="skeleton h-28 w-full rounded-2xl" />
      <div className="skeleton h-5 w-64" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
