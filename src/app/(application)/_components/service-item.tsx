import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { Service } from '@prisma/client'
import { useState } from 'react'
import { FaServicestack } from 'react-icons/fa'
import { ImCheckmark } from 'react-icons/im'

type ServiceItemProps = {
  service: Service
  selectedId?: string
}
export function ServiceItem({ service, selectedId }: ServiceItemProps) {
  const [selectedService, setSelectedService] = useState(false)
  const [isCheked, setIsCheked] = useState(false)

  function handleSeleted() {
    setSelectedService(!selectedService)
    setIsCheked(!isCheked)
  }
  return (
    <div
      className="flex w-20 flex-col items-center align-middle text-center"
      onClick={handleSeleted}
    >
      {isCheked && (
        <div className="w-20 h-20 rounded-full bg-primary-500 opacity-60 flex items-center justify-center absolute z-50">
          <ImCheckmark className="w-10 h-10 text-gray-900" />
        </div>
      )}
      {selectedId}
      <Avatar className="w-20 h-20">
        <AvatarImage src={service.imageUrl} alt={service.name} />
        <AvatarFallback delayMs={600}>
          <FaServicestack />
        </AvatarFallback>
      </Avatar>
      <h3 className="text-sm font-semibold">{service.name}</h3>
      <p className="text-zinc-500 text-xs">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(Number(service.price))}
      </p>
    </div>
  )
}
