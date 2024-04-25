import { cn } from '@/src/lib/utils'
import { ComponentProps, ReactNode } from 'react'

interface ItemContentProps extends ComponentProps<'div'> {
  title?: string
  subTitle?: string
  children?: ReactNode
}
export function ItemContent({
  title,
  subTitle,
  children,
  className,
}: ItemContentProps) {
  return (
    <div className={cn('flex flex-1 px-2 justify-between', className)}>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-600">{subTitle}</div>
      </div>
      {children}
    </div>
  )
}
