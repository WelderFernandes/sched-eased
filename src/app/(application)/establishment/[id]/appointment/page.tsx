'use client'
import { Calendar } from '@/src/components/ui/calendar'
import { useState } from 'react'
import { ptBR } from 'date-fns/locale'
import { addDays } from 'date-fns'
export default function Appointment() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex flex-col px-6">
      <Calendar
        locale={ptBR}
        fromDate={addDays(new Date(), 0)}
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        styles={{
          nav_button_previous: {
            width: '32px',
            height: '32px',
            color: '#363062',
          },
          nav_button_next: {
            width: '32px',
            height: '32px',
            color: '#363062',
          },

          caption_end: {
            width: '100%',
          },
        }}
      />
    </div>
  )
}
