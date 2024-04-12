'use client'
import { Calendar } from '@/src/components/ui/calendar'
import { Suspense, useEffect, useMemo, useState } from 'react'
import { ptBR } from 'date-fns/locale'
import { addDays } from 'date-fns'
import { Booking, Service } from '@prisma/client'
import { GetServicesForEsblishment } from '@/src/actions/service-action'
import { ServiceItem } from '../../../_components/service-item'
import { ServiceLoadingItem } from '../../../_components/service-loading-item'
import { generateDayTimeList } from '@/src/app/helpers/hours'
import { getDayBookings } from '@/src/actions/get-day-booking'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'
import { Wallet } from 'lucide-react'

interface Appointment {
  params: {
    id: string
  }
}
export default function Appointment({ params }: Appointment) {
  const [date, setDate] = useState<Date>(new Date())
  const [services, setservices] = useState<Service[]>()
  const [dayBookings, setDayBookings] = useState<Booking[]>([])
  const [hour, setHour] = useState<string>('')

  const handleHourClick = (time: string) => {
    setHour(time)
  }

  useEffect(() => {
    async function RefreshServices() {
      const response = await GetServicesForEsblishment(params.id)
      console.log('🚀 ~ RefreshServices ~ response:', response)
      setservices(response)
    }

    if (!date) {
      return
    }

    const refreshAvailableHours = async () => {
      const _dayBookings = await getDayBookings(params.id, date)
      setDayBookings(_dayBookings)
    }

    refreshAvailableHours()
    RefreshServices()
  }, [date, params.id])

  const timeList = useMemo(() => {
    if (!date) {
      return []
    }

    return generateDayTimeList(date).filter((time) => {
      const timeHour = Number(time.split(':')[0])
      const timeMinutes = Number(time.split(':')[1])

      const booking = dayBookings.find((booking) => {
        const bookingHour = booking.date.getHours()
        const bookingMinutes = booking.date.getMinutes()

        return bookingHour === timeHour && bookingMinutes === timeMinutes
      })

      if (!booking) {
        return true
      }

      return false
    })
  }, [date, dayBookings])

  async function Services() {
    return (
      <>
        {services?.map((service) => (
          <div className="flex" key={service.id}>
            <ServiceItem service={service} />
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="px-6 h-screen">
      <Calendar
        locale={ptBR}
        fromDate={addDays(new Date(), 0)}
        selected={date}
        mode="single"
        onSelect={(date) => setDate(date as Date)}
        className="rounded-md border shadow"
        styles={{
          caption_end: {
            width: '100%',
          },
        }}
      />

      <h1 className="text-md font-semibold pt-5">Escolha o serviço</h1>
      <div className="flex gap-4 mt-4 h-max">
        <Suspense fallback={<ServiceLoadingItem repetitions={7} />}>
          <Services />
        </Suspense>
      </div>
      <h1 className="text-md font-semibold pt-5">Horario disponivel</h1>
      <div className="flex gap-4 mt-4 flex-wrap">
        {timeList.map((time) => (
          <Button
            key={time}
            onClick={() => handleHourClick(time)}
            variant={hour === time ? 'default' : 'outline'}
            className={cn(
              'rounded-md border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white ',
              hour === time && 'bg-primary-900 text-white',
            )}
          >
            {time}
          </Button>
        ))}
      </div>
      <h1 className="text-md font-semibold pt-5">Resumo do pagamento</h1>
      <div className="flex flex-col flex-1 py-4 border-b-2 border-dashed ">
        <div className="flex align-middle justify-between w-full text-gray-900 font-medium">
          <span>Basic haircut</span>
          <span>R$ 25,00</span>
        </div>
      </div>
      <div className="flex align-middle justify-between w-full text-gray-900 font- font-bold py-4">
        <span>Total</span>
        <span>R$ 25,00</span>
      </div>
      <div className="w-full">
        <Button
          variant="default"
          className="w-full bg-primary-900 text-white font-bold h-14 rounded-md hover:bg-primary-800"
        >
          Reservar <Wallet className="ml-2" />
        </Button>
      </div>
    </div>
  )
}
