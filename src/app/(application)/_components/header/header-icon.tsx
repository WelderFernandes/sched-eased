import { cn } from '@/src/lib/utils'
import { ComponentProps, ElementType } from 'react'

interface HeaderIconProps extends ComponentProps<'svg'> {
  icon: ElementType
}

export default function HeaderIcon({
  icon: Icon,
  className,
  ...props
}: HeaderIconProps) {
  return (
    <Icon className={cn('w-5 h-5 text-primary-900', className)} {...props} />
  )
}
