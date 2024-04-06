'use client'
import { Button } from '@/src/components/ui/button'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

export default function EstablishmentLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const route = useRouter()
  return (
    <div>
      <header className="flex gap-1 align-middle items-center px-2 py-6">
        <Button
          variant="ghost"
          className="flex gap-1 items-center"
          onClick={() => route.back()}
        >
          <BsArrowLeft size={24} />
        </Button>
        <h1 className="font-bold text-balance ">Detalhe do Estabelecimento</h1>
      </header>
      {children}
    </div>
  )
}
