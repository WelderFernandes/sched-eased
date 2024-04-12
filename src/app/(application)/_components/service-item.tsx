import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { Service } from '@prisma/client'
import { FaServicestack } from 'react-icons/fa6'

interface ServiceItemProps {
  service: Service
}
export function ServiceItem({ service = 1 }: ServiceItemProps) {
  return (
    <div className="flex w-20 flex-col items-center align-middle text-center">
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
        }).format(service.price)}
      </p>
    </div>
  )
}
