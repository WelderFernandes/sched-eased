'use client'
import { Button } from '@/src/components/ui/button'
import { Bell } from 'lucide-react'
import { ReactNode } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { Header } from '../../_components/header'

export default function EstablishmentLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      <Header.Root>
        <Button
          variant={'link'}
          onClick={() => {
            history.back()
          }}
        >
          <Header.Icon icon={FaArrowLeftLong} />
        </Button>
        <Header.Content>
          <Header.Title className="text-neutral-900" title="Agendar Consulta" />
        </Header.Content>
        <Button
          variant={'link'}
          onClick={() => {
            alert('teste')
          }}
        >
          <Header.Icon icon={Bell} />
        </Button>
      </Header.Root>
      {children}
    </div>
  )
}
