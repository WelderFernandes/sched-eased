import { cn } from '@/src/lib/utils'
import { ComponentProps } from 'react'

interface ItemRightItemProps extends ComponentProps<'div'> {
  children: React.ReactNode
}
export function ItemRightItem({
  children,
  className,
  ...props
}: ItemRightItemProps) {
  return (
    <div
      className={cn('text-sm font-bold text-primary-900', className)}
      {...props}
    >
      {children}
    </div>
  )
}
