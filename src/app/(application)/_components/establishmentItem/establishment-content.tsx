import { cn } from '@/src/lib/utils'
import React, { ComponentProps } from 'react'
interface EstablishmentContentProps extends ComponentProps<'div'> {
  children: React.ReactNode
}

export default function EstablishmentContent({
  children,
  className,
  ...props
}: EstablishmentContentProps) {
  return (
    <div {...props} className={cn('flex flex-col', className)}>
      {children}
    </div>
  )
}
