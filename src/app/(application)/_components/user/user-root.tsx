import { ReactNode } from 'react'

interface UserRootProps {
  children: ReactNode
}
export function UserRoot({ children }: UserRootProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center">{children}</div>
    </div>
  )
}
