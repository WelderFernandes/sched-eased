import { Button } from '@/src/components/ui/button'
import { ScrollArea, ScrollBar } from '@/src/components/ui/scroll-area'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/src/components/ui/tabs'
import db from '@/src/lib/prisma'
import {
  Calendar,
  Heart,
  MapPin,
  MapPinIcon,
  Share2,
  StarIcon,
} from 'lucide-react'
import Image from 'next/image'
import {} from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa6'

interface EstablishmentProps {
  params: {
    id?: string
  }
}
export default async function EstablishmentDetails({
  params,
}: EstablishmentProps) {
  const [esblishment] = await Promise.all([
    db.establishment.findUnique({
      where: {
        id: params.id,
      },
      include: {
        services: true,
        establishmentCategory: true,
      },
    }),
  ])

  console.log({ esblishment })
  return (
    <div>
      <div className="flex flex-col px-6">
        <Image
          src={esblishment?.imageUrl || '/logo.png'}
          alt="nextui logo"
          width={500}
          height={500}
          className="w-full h-full block object-cover rounded-lg"
        />
        <h1 className="text-xl text-primary-900 font-bold pt-3">
          {esblishment?.name}
        </h1>
        <h2 className="text-zinc-500 font-thin text-sm flex items-center gap-3">
          <MapPinIcon size="24" className="w-4 h-4 inline" />
          {esblishment?.address}
        </h2>
        <h3 className="text-zinc-500 font-thin text-sm flex items-center gap-3">
          <StarIcon size="24" className="w-4 h-4  text-yellow-600" />
          5.0 (24)
        </h3>
        <div className="flex py-6 px-0 items-center align-middle justify-center">
          <Button variant="ghost" className="h-16">
            <div className="flex flex-col gap-2 items-center justify-start ">
              <MapPin size={24} />{' '}
              <h3 className="text-sm text-primary-900 font-extralight">Mapa</h3>
            </div>
          </Button>
          <Button variant="ghost" className="h-16">
            <div className="flex flex-col gap-2 items-center justify-start ">
              <FaWhatsapp size={24} />{' '}
              <h3 className="text-sm text-primary-900 font-extralight">
                WhatsApp
              </h3>
            </div>
          </Button>
          <Button variant="ghost" className="h-16">
            <div className="flex flex-col gap-2 items-center justify-start ">
              <Share2 size={24} />{' '}
              <h3 className="text-sm text-primary-900 font-extralight">
                Compartilhar
              </h3>
            </div>
          </Button>
          <Button variant="ghost" className="h-16">
            <div className="flex flex-col gap-2 items-center justify-start ">
              <Heart size={24} />{' '}
              <h3 className="text-sm text-primary-900 font-extralight">
                Favoritar
              </h3>
            </div>
          </Button>
        </div>
      </div>
      <Tabs defaultValue="about">
        <ScrollArea className="w-full">
          <TabsList className="w-full h-14 gap-4 px-6 ">
            <TabsTrigger value="about" className="flex gap-2">
              <Image
                src="/about-icon.png"
                width={24}
                height={24}
                className="w-4 h-4"
                alt="Services"
              />{' '}
              Sobre nós
            </TabsTrigger>
            <TabsTrigger value="services" className="flex gap-2">
              <Image
                src="/service-icon.png"
                width={24}
                height={24}
                className="w-4 h-4"
                alt="Services"
              />
              Serviços
            </TabsTrigger>
            <TabsTrigger value="schedule" className="flex gap-2">
              <Calendar size={18} className="text-gray-400" />
              Agenda
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex gap-2">
              <StarIcon size={18} className="text-gray-400" />
              Avaliações
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <TabsContent value="about">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="services">services</TabsContent>
        <TabsContent value="schedule">Agenda.</TabsContent>
        <TabsContent value="reviews">Reviews</TabsContent>
      </Tabs>
    </div>
  )
}
