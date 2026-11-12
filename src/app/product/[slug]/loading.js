export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="skeleton h-4 w-48" />
      <div className="skeleton h-36 w-full rounded-2xl" />
      <div className="grid gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="skeleton h-24 rounded-xl" />
        ))}
      </div>
      <div className="skeleton h-72 w-full rounded-2xl" />
    </div>
  );
}
