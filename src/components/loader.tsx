import { Skeleton } from "./ui/skeleton";

export default function Loader() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-6 w-1/3" />
      <Skeleton className="h-6 w-full" />
    </div>
  );
}
