import { ReactNode } from 'react'
// import { Header } from '../_components/header'

export default function AplicationLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <div>{children}</div>
}
