'use server'
import db from '../lib/prisma'

export const getEstablishments = async (limit: number = 10) => {
  const [establishment] = await db.establishment.findMany({
    orderBy: { name: 'asc' },
    take: limit,
  })

  return establishment
}
