'use client'
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
    <div className={className} {...props}>
      {children}
    </div>
  )
}
