'use server'
import { Decimal } from '@prisma/client/runtime/library'
import db from '../lib/prisma'
import { revalidatePath } from 'next/cache'

interface SaveBookingParams {
  establishmentId: string
  serviceId: string
  userId: string
  date: Date
  statusId: string
  price: number | Decimal
}

export async function CreateBooking(params: SaveBookingParams) {
  try {
    const status = await db.bookingStatus.findFirst({
      where: { name: params.statusId },
    })
    return await db.booking.create({
      data: {
        establishmentId: params.establishmentId,
        serviceId: params.serviceId,
        userId: params.userId,
        date: params.date,
        statusId: status?.id,
      },
    })
  } catch (error) {
    return console.log({ error })
  } finally {
    revalidatePath('/bookings')
  }
}

export async function GetBookingStatus(id: string) {
  return await db.serviceCategoty.findFirst({ where: { id } })
}
