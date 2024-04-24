import db from '@/src/lib/prisma'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { EsblishmentItem } from '../../../_components/establishmentItem-item'
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
    <div className="flex min-h-screen min-w-screen flex-col  bg-primary-900 text-white-900">
      <div className="flex items-center justify-start gap-6 h-14 px-6">
        <ArrowLeft className="text-white-900" />
        <h1 className="text-white font-bold">Seu compromisso</h1>
      </div>
      <div className="relative flex  items-center justify-center">
        <Image
          src="/chip.png"
          alt="Next.js Logo"
          width={500}
          height={500}
          quality={100}
          className="w-full h-fit object-cover"
        />
        <div className="absolute w-fit h-fit m-4 bg-primary-700/50 rounded-md">
          {establishment && (
            <EsblishmentItem
              esblishmentItem={establishment}
              className="rounded-md m-4 text-white-900"
            />
          )}
          <EstablishmentItem.Root className="rounded-md m-4 text-white-900">
            <EstablishmentItem.Image
              imageUrl={establishment?.imageUrl as string}
              alt={establishment?.name as string}
            />
          </EstablishmentItem.Root>
        </div>
      </div>
    </div>
  )
}
