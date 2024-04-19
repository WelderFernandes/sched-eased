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
export async function GetServices(id: string[]) {
  const services = await db.service.findMany({
    where: {
      id: {
        in: id,
      },
    },
  })
  console.log({ services })

  return services
}
