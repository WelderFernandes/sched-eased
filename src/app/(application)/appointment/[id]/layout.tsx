'use client'
import { ReactNode } from 'react'
import { Header } from '../../establishment/components/header'

export default function EstablishmentLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      <Header title="Agendar serviço" />
      {children}
    </div>
  )
}
