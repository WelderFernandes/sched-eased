import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { Button } from '@/src/components/ui/button'
import { ScrollArea, ScrollBar } from '@/src/components/ui/scroll-area'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/src/components/ui/tabs'
import db from '@/src/lib/prisma'
import { Calendar, Heart, MapPinIcon, Share2, StarIcon } from 'lucide-react'
import Image from 'next/image'
import {} from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io5'

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
        <div className="flex py-6 px-0 items-center align-middle justify-between">
          <Button variant="ghost" className="h-16">
            <div className="flex flex-col gap-2 items-center ">
              <Image
                src="/maps.png"
                width={22}
                height={22}
                quality={100}
                className=""
                alt="Services"
              />
              <h3 className="text-sm text-primary-900 font-extralight">Mapa</h3>
            </div>
          </Button>
          <Button variant="ghost" className="h-16">
            <div className="flex flex-col gap-2 items-center ">
              <Image
                src="/whatsapp.png"
                width={34}
                height={34}
                quality={100}
                className=""
                alt="Services"
              />
              <h3 className="text-sm text-primary-900 font-extralight">
                WhatsApp
              </h3>
            </div>
          </Button>
          <Button variant="ghost" className="h-16">
            <div className="flex flex-col gap-2 items-center">
              <Share2
                size={24}
                fill="bg-primary-900"
                className="w-6 h-6 text-primary-900 autofill:bg-primary-900"
              />{' '}
              <h3 className="text-sm text-primary-900 font-extralight">
                Compartilhar
              </h3>
            </div>
          </Button>
          <Button variant="ghost" className="h-16">
            <div className="flex flex-col gap-2 items-center ">
              <Heart size={24} fill="red" />{' '}
              <h3 className="text-sm text-primary-900 font-extralight">
                Favoritar
              </h3>
            </div>
          </Button>
        </div>
      </div>
      <Tabs defaultValue="about">
        <ScrollArea className="w-full">
          <TabsList className="w-full h-14 gap-4 px-6 bg-primary-50 cursor-pointer">
            <TabsTrigger
              value="about"
              className="flex gap-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:ring-2 ring-primary-900 ring-offset-2 "
            >
              <Image
                src="/about-icon.png"
                width={24}
                height={24}
                className="w-4 h-4 "
                alt="Services"
              />{' '}
              Sobre nós
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="flex gap-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:ring-2 ring-primary-900 ring-offset-2 "
            >
              <Image
                src="/service-icon.png"
                width={24}
                height={24}
                className="w-4 h-4"
                alt="Services"
              />
              Serviços
            </TabsTrigger>
            <TabsTrigger
              value="schedule"
              className="flex gap-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:ring-2 ring-primary-900 ring-offset-2 "
            >
              <Calendar size={18} className="text-gray-400" />
              Agenda
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="flex gap-2 data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:ring-2 ring-primary-900 ring-offset-2 "
            >
              <StarIcon size={18} className="text-gray-400" />
              Avaliações
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <TabsContent
          value="about"
          className="w-full py-6 px-5 text-primary-900 text-clip  tab-content"
        >
          <p className="text-sm">{esblishment?.description}</p>
          <h1 className="font-bold py-4">Horário de funcionamento</h1>
          <div className="flex justify-between text-sm">
            <p className="text-gray-500 ">Segunda-feira a sexta-feira</p>
            <span className="font-bold">09.00 am - 08.00 pm </span>
          </div>
          <div className="flex justify-between text-sm">
            <p className="text-gray-500 ">Sábado é domingo</p>
            <span className="font-bold">09.00 am - 06.00 pm </span>
          </div>
          <h1 className="font-bold py-4">Nosso Time</h1>
          <div className="flex flex-col gap-4">
            <div className="flex">
              <Avatar>
                <AvatarImage src="https://github.com/welderfernandes.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex justify-between w-full align-middle">
                <div className="flex flex-col align-middle justify-center px-2">
                  <h1 className="font-bold">Welder Fernandes</h1>
                  <p className="text-sm text-gray-500">Co-fundador</p>
                </div>
                <div className="flex align-middle items-center justify-center gap-2">
                  <StarIcon size={18} className="text-gray-400" />
                  5.0
                </div>
              </div>
            </div>
            <div className="flex">
              <Avatar>
                <AvatarImage src="https://github.com/welderfernandes.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex justify-between w-full align-middle">
                <div className="flex flex-col align-middle justify-center px-2">
                  <h1 className="font-bold">Welder Fernandes</h1>
                  <p className="text-sm text-gray-500">Co-fundador</p>
                </div>
                <div className="flex align-middle items-center justify-center gap-2">
                  <StarIcon size={18} className="text-gray-400" />
                  5.0
                </div>
              </div>
            </div>
            <div className="flex">
              <Avatar>
                <AvatarImage src="https://github.com/welderfernandes.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex justify-between w-full align-middle">
                <div className="flex flex-col align-middle justify-center px-2">
                  <h1 className="font-bold">Welder Fernandes</h1>
                  <p className="text-sm text-gray-500">Co-fundador</p>
                </div>
                <div className="flex align-middle items-center justify-center gap-2">
                  <StarIcon size={18} className="text-gray-400" />
                  5.0
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="services">services</TabsContent>
        <TabsContent value="schedule">Agenda.</TabsContent>
        <TabsContent value="reviews">Reviews</TabsContent>
      </Tabs>
      <Button
        variant="default"
        className="h-16 bg-primary-900 text-white w-full px-auto "
      >
        <div className="flex flex-col gap-2 items-center ">
          Fazer uma reserva
        </div>
      </Button>
    </div>
  )
}
