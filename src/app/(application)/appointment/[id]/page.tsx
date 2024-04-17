'use client'
import { Calendar } from '@/src/components/ui/calendar'
import { useEffect, useMemo, useState } from 'react'
import { ptBR } from 'date-fns/locale'
import { addDays } from 'date-fns'
import { GetServicesForEsblishment } from '@/src/actions/service-action'
import { ServiceItem } from '../../_components/service-item'
import { Booking, Service } from '@prisma/client'
import { ServiceLoadingItem } from '../../_components/service-loading-item'
import { generateDayTimeList } from '@/src/app/helpers/hours'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'
import { Wallet2Icon } from 'lucide-react'

interface Appointment {
  params: {
    id: string
  }
}
export default function Appointment({ params }: Appointment) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [services, setservices] = useState<Service[]>()
  const [dayBookings, setDayBookings] = useState<Booking[]>([])
  const [hour, setHour] = useState<string>('')
  const [idServiceSelected, setIdServiceSelected] = useState<string[]>([])

  useEffect(() => {
    async function RefreshServices() {
      setDate(date as Date)
      const response = await GetServicesForEsblishment(params.id)
      setservices(response)
    }
    RefreshServices()
  }, [params.id, date])

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

  function handleSeletedService(id: string) {
    setIdServiceSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id)
      }
      return [...prev, id]
    })
  }

  function handleSubmit() {
    const data = {
      idService: idServiceSelected,
      idEstablishment: params.id,
      date,
      hour,
    }
    console.log({ data })
  }

  return (
    <form className="px-6 h-screen">
      <Calendar
        locale={ptBR}
        fromDate={addDays(new Date(), 0)}
        selected={date}
        mode="single"
        onSelect={(value) => setDate(value)}
        className="rounded-md border shadow"
        styles={{
          caption_end: {
            width: '100%',
          },
        }}
      />
      <h1 className="text-md font-semibold pt-5">Escolha o serviço</h1>
      <div className="flex gap-4 mt-4 h-max">
        {services !== undefined ? (
          services?.map((service) => (
            <div
              className="flex"
              key={service.id}
              onClick={() => handleSeletedService(service.id)}
            >
              <ServiceItem service={service} />
            </div>
          ))
        ) : (
          <ServiceLoadingItem repetitions={10} />
        )}
      </div>

      <h1 className="text-md font-semibold pt-5">Horario disponivel</h1>
      <div className="flex gap-4 mt-4 flex-wrap">
        {timeList.map((time) => (
          <Button
            key={time}
            onClick={() => setHour(time)}
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
      <div className="w-full py-7">
        <Button
          onSubmit={handleSubmit}
          variant="default"
          className="w-full bg-primary-900 text-white font-bold h-14 rounded-md hover:bg-primary-800"
        >
          Reservar <Wallet2Icon className="ml-2" />
        </Button>
      </div>
    </form>
  )
}
