import { cn } from '@/src/lib/utils'
import { ComponentProps, ReactNode } from 'react'
import { FaLocationDot } from 'react-icons/fa6'

interface EstablishmentAddressProps extends ComponentProps<'div'> {
  children: ReactNode
}

export default function EstablishmentAddress({
  children,
  className,
  ...props
}: EstablishmentAddressProps) {
  return (
    <div {...props} className={cn('flex gap-1 items-center', className || '')}>
      <FaLocationDot size={14} className="text-red-600" />
      <p className="text-sm text-white-900">{children}</p>
    </div>
  )
}
