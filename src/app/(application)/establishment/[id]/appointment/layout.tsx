'use client'
import { ReactNode } from 'react'
import { Header } from '../../components/header'

export default function EstablishmentLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      <Header title="Agendamento" />
      {children}
    </div>
  )
}
