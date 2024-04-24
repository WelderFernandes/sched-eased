import db from '@/src/lib/prisma'
import { ArrowLeft, LucideCalendarRange } from 'lucide-react'
import Image from 'next/image'
import { EstablishmentItem } from '../../../_components/establishmentItem'

interface AppointmentDetailProps {
  params: {
    id: string
    establishmentId: string
  }
}

export default async function AppointmentDetail({
  params,
}: AppointmentDetailProps) {
  const [establishment, bookings] = await Promise.all([
    db.establishment.findUnique({
      where: { id: params.establishmentId },
    }),
    db.booking.findMany({
      where: { id: params.id },
    }),
  ])
  console.log('🚀 ~ establishment:', establishment, bookings)

  return (
    <div className="flex h-screen flex-col bg-primary-900 text-white-900">
      <div className="flex items-center justify-start gap-6 py-4 px-6 ">
        <ArrowLeft className="text-white-900" />
        <h1 className="text-white font-bold">Seu compromisso</h1>
      </div>
      <div className="relative flex h-[500px] w-full overflow-hidden items-center justify-center">
        <Image
          src="/chip.png"
          alt="Next.js Logo"
          quality={100}
          objectFit="cover"
          layout="fill"
          className="w-full absolute"
        />
        <div className="relative w-fit h-fit m-4 bg-primary-700/50 rounded-md">
          <EstablishmentItem.Root>
            <EstablishmentItem.Image
              imageUrl={establishment?.imageUrl as string}
              alt={establishment?.name as string}
            />
            <EstablishmentItem.Content>
              <EstablishmentItem.Title>
                {establishment?.name}
              </EstablishmentItem.Title>
              <EstablishmentItem.Address>
                {establishment?.address}
              </EstablishmentItem.Address>
              <EstablishmentItem.Rating>4.1</EstablishmentItem.Rating>
            </EstablishmentItem.Content>
          </EstablishmentItem.Root>
        </div>
      </div>
      <div className="rounded-t-xl bg-white-900 p-4 h-full text-foreground">
        <div className="flex flex-row gap-2 items-center align-middle">
          <LucideCalendarRange size={18} />
          <h3 className="font-bold">Data e Hora</h3>
        </div>
        <p className="text-gray-500">Sun, 15 Jan - 08:00 AM</p>
        <h1 className="text-primary-900 font-semibold py-6">
          Lista de serviços
        </h1>
      </div>
    </div>
  )
}
