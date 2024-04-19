import { ReactNode } from 'react'
import { Header } from '../_components/header'
// import { Header } from '../_components/header'

export default function AplicationLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
