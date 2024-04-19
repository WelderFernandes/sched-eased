'use client'
import { Calendar } from '@/src/components/ui/calendar'
import { useEffect, useMemo, useState } from 'react'
import { ptBR } from 'date-fns/locale'
import { addDays, setHours, setMinutes } from 'date-fns'
import { GetServicesForEsblishment } from '@/src/actions/service-action'
import { ServiceItem } from '../../_components/service-item'
import { Booking, Service, User } from '@prisma/client'
import { ServiceLoadingItem } from '../../_components/service-loading-item'
import { generateDayTimeList } from '@/src/app/helpers/hours'
import { Button } from '@/src/components/ui/button'
import { cn } from '@/src/lib/utils'
import { Loader2, Wallet2Icon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { CreateBooking } from '@/src/actions/booking-action'
import { getDayBookings } from '@/src/actions/get-day-booking'

interface Appointment {
  params: {
    id: string
  }
}
export default function Appointment({ params }: Appointment) {
  const [date, setDate] = useState<string | Date>(new Date())
  const [services, setservices] = useState<Service[]>()
  const [dayBookings, setDayBookings] = useState<Booking[]>([])
  const [hour, setHour] = useState<string>('')
  const [idServiceSelected, setIdServiceSelected] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { data } = useSession()

  useEffect(() => {
    async function RefreshServices() {
      setDate(date as Date)
      const response = await GetServicesForEsblishment(params.id)
      setservices(response)
    }
    async function refreshAvailableHours() {
      const _dayBookings = await getDayBookings(params.id, date as Date)
      setDayBookings(_dayBookings)
    }

    refreshAvailableHours()
    RefreshServices()
  }, [params.id, date])

  const timeList = useMemo(() => {
    if (!date) {
      return []
    }

    return generateDayTimeList(date as Date).filter((time) => {
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
  console.log({ loading, idServiceSelected })

  async function handleSubmit() {
    setLoading(true)
    try {
      if (!hour || !date || !data?.user) {
        return
      }
      const dateHour = Number(hour.split(':')[0])
      const dateMinutes = Number(hour.split(':')[1])
      const newDate = setMinutes(setHours(date, dateHour), dateMinutes)

      // idServiceSelected.map(async (serviceId) => {
      await CreateBooking({
        date: newDate,
        userId: (data.user as User).id,
        establishmentId: params.id,
        serviceId: idServiceSelected[0],
        price:
          services?.find((service) => service.id === idServiceSelected[0])
            ?.price || 0,
        statusId: 'Pendente',
      })
      // })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-6 h-screen">
      <Calendar
        locale={ptBR}
        fromDate={addDays(new Date(), 0)}
        selected={date as Date}
        mode="single"
        onSelect={(value) => setDate(value as Date)}
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
          disabled={loading}
          onClick={() => handleSubmit()}
          variant="default"
          className="w-full bg-primary-900 text-white font-bold h-14 rounded-md hover:bg-primary-800"
        >
          {loading && <Loader2 className="mr-2 h-6 w-6 animate-spin" />}
          Reservar <Wallet2Icon className="ml-2" />
        </Button>
      </div>
    </div>
  )
}