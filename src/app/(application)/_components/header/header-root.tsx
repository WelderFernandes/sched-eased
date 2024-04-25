import { cn } from '@/src/lib/utils'
import { ComponentProps, ReactNode } from 'react'

interface HeaderRootProps extends ComponentProps<'div'> {
  children: ReactNode
}
export default function HeaderRoot({
  children,
  className,
  ...props
}: HeaderRootProps) {
  return (
    <div
      className={cn(
        'flex justify-between h-20 items-center mx-6 gap-5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
