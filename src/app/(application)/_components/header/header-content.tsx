import { cn } from '@/src/lib/utils'
import { ComponentProps, ReactNode } from 'react'

interface HeaderContentProps extends ComponentProps<'div'> {
  children: ReactNode
}
export default function HeaderContent({
  children,
  className,
  ...props
}: HeaderContentProps) {
  return (
    <div className={cn('flex flex-1 items-center', className)} {...props}>
      {children}
    </div>
  )
}
