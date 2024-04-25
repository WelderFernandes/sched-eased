import { cn } from '@/src/lib/utils'
import { ComponentProps } from 'react'

interface HeaderTitleProps extends ComponentProps<'div'> {
  title: string
}
export default function HeaderTitle({
  className,
  title,
  ...props
}: HeaderTitleProps) {
  return (
    <div className={cn('text-lg font-bold', className)} {...props}>
      {title}
    </div>
  )
}
