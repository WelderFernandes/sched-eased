import { cn } from '@/src/lib/utils'
import { StarIcon } from 'lucide-react'
import { ComponentProps, ReactNode } from 'react'

interface EstablishmentRatingProps extends ComponentProps<'p'> {
  children: ReactNode
}

export default function EstablishmentRating({
  children,
  className,
  ...props
}: EstablishmentRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <StarIcon size={14} className="gold" fill="gold" stroke="gold" />
      <p {...props} className={cn('text-sm text-white-900 ', className)}>
        {children}
      </p>
    </div>
  )
}
