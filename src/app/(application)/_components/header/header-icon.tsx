import { ElementType } from 'react'

interface HeaderIconProps {
  icon: ElementType
}

export default function HeaderIcon({ icon: Icon }: HeaderIconProps) {
  return <Icon className="w-5 h-5 text-primary-900" />
}
