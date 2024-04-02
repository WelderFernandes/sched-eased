'use client'
import { ReactElement, cloneElement, useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/src/lib/utils'

const ratingVariants = {
  default: {
    star: 'text-foreground',
    emptyStar: 'text-muted-foreground',
  },
  destructive: {
    star: 'text-red-500',
    emptyStar: 'text-red-200',
  },
  yellow: {
    star: 'text-amber-300',
    emptyStar: 'text-amber-100',
  },
}

interface RatingsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating?: number
  totalStars?: number
  size?: number
  fill?: boolean
  Icon?: ReactElement
  variant?: keyof typeof ratingVariants
}

const Ratings: React.FC<RatingsProps> = ({
  rating = 0,
  totalStars = 5,
  size = 20,
  fill = true,
  Icon = <Star />,
  variant = 'default',
  ...props
}) => {
  const [currentRating, setCurrentRating] = useState(rating)

  const fullStars = Math.floor(currentRating)
  // const partialStar =
  //   currentRating % 1 > 0 ? (
  //     <PartialStar
  //       fillPercentage={currentRating % 1}
  //       size={size}
  //       className={cn(ratingVariants[variant].star)}
  //       Icon={Icon}
  //     />
  //   ) : null

  return (
    <div className={cn('flex items-center gap-2')} {...props}>
      {[...Array(totalStars)].map((_, i) => {
        const starNumber = i + 1
        console.log(fullStars > starNumber - 1)
        return (
          <div
            key={i}
            onClick={() => setCurrentRating(starNumber)}
            className={cn(
              'cursor-pointer',
              fullStars > starNumber - 1
                ? cn(
                    fill ? 'fill-transparent' : 'fill-corrent',
                    ratingVariants[variant].star,
                  )
                : cn(ratingVariants[variant].emptyStar),
            )}
          >
            {cloneElement(Icon, { size, className: cn('fill-current') })}
          </div>
        )
      })}
      <h3 className="text-medium font-extrabold px-5">{currentRating}</h3>
    </div>
  )
}

// interface PartialStarProps {
//   fillPercentage: number
//   size: number
//   className?: string
//   Icon: React.ReactElement
// }
// const PartialStar: React.FC<PartialStarProps> = ({
//   fillPercentage,
//   size,
//   className,
//   Icon,
// }) => {
//   return (
//     <div style={{ position: 'relative', display: 'inline-block' }}>
//       {cloneElement(Icon, { size, className })}
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           overflow: 'hidden',
//           width: `${fillPercentage * 100}%`,
//         }}
//       >
//         {cloneElement(Icon, { size, className: cn('fill-current') })}
//       </div>
//     </div>
//   )
// }

export { Ratings }
