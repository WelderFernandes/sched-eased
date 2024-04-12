'use server'

import { endOfDay, startOfDay } from 'date-fns'
import db from '../lib/prisma'

export const getDayBookings = async (establishmentId: string, date: Date) => {
  const bookings = await db.booking.findMany({
    where: {
      establishmentId,
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  })

  return bookings
}
