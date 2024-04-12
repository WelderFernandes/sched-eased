import { Skeleton } from '@/src/components/ui/skeleton'

interface ServiceLoadingItemProps {
  repetitions?: number
}

export function ServiceLoadingItem({
  repetitions = 1,
}: ServiceLoadingItemProps) {
  return (
    <div className="flex gap-3">
      {Array.from({ length: repetitions }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center align-middle gap-2 justify-center "
        >
          <Skeleton className="h-16 w-16 rounded-full bg-gray-300 animate-pulse"></Skeleton>
          <Skeleton className="h-4 w-16 bg-gray-300 animate-pulse py-2"></Skeleton>
          <Skeleton className="h-4 w-16 bg-gray-300 animate-pulse "></Skeleton>
        </div>
      ))}
    </div>
  )
}
