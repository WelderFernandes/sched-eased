import db from '../lib/prisma'

export async function GetEstablishment(id: string) {
  const establishment = await db.establishment.findFirst({
    where: {
      id,
    },
  })
  console.log({ establishment })
  return establishment
}
