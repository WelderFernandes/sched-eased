import { ReactNode } from 'react'
interface InputRootProps {
  children: ReactNode
}

export function InputRoot({ children }: InputRootProps) {
  return <div className="grid w-full items-center gap-1.5">{children}</div>
}
