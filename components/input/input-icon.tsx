import { ElementType } from 'react'

interface InputIconProps {
  icon: ElementType
}

export function InputIcon({ icon: Icon }: InputIconProps) {
  return <Icon className="w-5 h-5 text-primary-900" />
}
