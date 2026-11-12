import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="space-y-10">
      <div className="skeleton h-56 w-full rounded-2xl" />
      <div className="space-y-4">
        <div className="skeleton h-6 w-48" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
