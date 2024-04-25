import { ReactNode } from 'react'

interface ItemRootProps {
  children: ReactNode
}
export function ItemRoot({ children }: ItemRootProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center">{children}</div>
    </div>
  )
}
