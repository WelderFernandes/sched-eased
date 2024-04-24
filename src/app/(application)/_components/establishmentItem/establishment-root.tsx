'use client'
import { cn } from '@/src/lib/utils'
import { ComponentProps, ReactNode } from 'react'

interface EstablishmentRootProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function EstablishmentRoot({
  children,
  className,
  ...props
}: EstablishmentRootProps) {
  return (
    <div
      className={cn('rounded-md m-4 text-white-900 flex gap-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}
