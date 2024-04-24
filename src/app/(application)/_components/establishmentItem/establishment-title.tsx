import { cn } from '@/src/lib/utils'
import { ComponentProps, ReactNode } from 'react'

interface EstablishmentTitleProps extends ComponentProps<'h2'> {
  children: ReactNode
}

export function EstablishmentTitile({
  children,
  className,
  ...props
}: EstablishmentTitleProps) {
  return (
    <div className={cn('text-lg font-bold', className)} {...props}>
      {children}
    </div>
  )
}
