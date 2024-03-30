import { ReactNode } from 'react'

interface InputActionsProps {
  children: ReactNode
}

export function InputAction({ children }: InputActionsProps) {
  return <div>{children}</div>
}
