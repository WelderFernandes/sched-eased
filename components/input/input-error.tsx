import { ReactNode } from 'react'

interface InputErrorProps {
  children: ReactNode
}

export function InputError({ children }: InputErrorProps) {
  return <p className="text-red-500 font-semibold text-xs">{children}</p>
}
