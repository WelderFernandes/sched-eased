'use server'
import db from '../lib/prisma'

export async function GetServicesForEsblishment(id: string) {
  const service = await db.service.findMany({
    where: {
      establishmentId: id,
    },
  })
  console.log({ service, id })
  return service
}
export async function GetServices() {
  const services = await db.service.findMany()
  return services
}
