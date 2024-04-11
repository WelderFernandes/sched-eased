import { ReactNode } from 'react'

interface UserContentProps {
  title?: string
  subTitle?: string
  children?: ReactNode
}
export function UserContent({ title, subTitle, children }: UserContentProps) {
  return (
    <div className="flex px-2 justify-between w-full">
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-600">{subTitle}</div>
      </div>
      {children}
    </div>
  )
}
