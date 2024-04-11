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
import { FormatMoney } from '@/src/lib/utils'
import { Calendar, Heart, MapPinIcon, Share2, StarIcon } from 'lucide-react'
import Image from 'next/image'
import { Suspense } from 'react'
import {} from 'react-icons/bs'
import { FaServicestack } from 'react-icons/fa6'
import { EstablishmentItemLoading } from '../../_components/establishmentitem-loading'
import { UserRoot } from '../../_components/user/user-root'
import { UserContent } from '../../_components/user/user-content'
import { UserAvatar } from '../../_components/user/user-avatar'
import { UserRightItem } from '../../_components/user/user-right-tem'
import Link from 'next/link'

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
        team: true,
      },
    }),
  ])

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
              className="flex gap-2 data-[state=active]:text-primary-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:ring-2 ring-primary-900"
            >
              <Image
                src="/about-icon.png"
                width={24}
                height={24}
                className="w-4 h-4"
                alt="Services"
              />{' '}
              Sobre nós
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="flex gap-2 data-[state=active]:text-primary-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:ring-2 ring-primary-900"
            >
              <Image
                src="/service-icon.png"
                width={24}
                height={24}
                className="w-4 h-4"
                alt="Services"
              />
              {esblishment?.services.length} Serviços
            </TabsTrigger>
            <TabsTrigger
              value="schedule"
              className="flex gap-2 data-[state=active]:text-primary-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:ring-2 ring-primary-900"
            >
              <Calendar size={18} className="text-gray-400" />
              Agenda
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="flex gap-2 data-[state=active]:text-primary-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:ring-2 ring-primary-900"
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
          <UserRoot>
            <UserAvatar
              imageUrl="https://github.com/welderfernandes.png"
              alt="Welder Fernandes"
            />
            <UserContent title="Co-fundador" subTitle="Welder Fernandes">
              <UserRightItem />
            </UserContent>
          </UserRoot>
          {/* <div className="flex flex-col gap-4">
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
          </div> */}
        </TabsContent>
        <TabsContent value="services" className="w-full py-3 px-5">
          <h1 className="text-gray-900 font-semibold pb-5">Nossos serviços</h1>
          <div className="flex flex-col gap-4">
            <Suspense fallback={<EstablishmentItemLoading />}>
              {esblishment?.services?.map((service) => (
                <div className="flex" key={service.id}>
                  <Avatar>
                    <AvatarImage src={service.imageUrl} />
                    <AvatarFallback>
                      <FaServicestack size={18} />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex justify-between w-full align-middle">
                    <div className="flex flex-col align-middle justify-center px-2 ">
                      <h1 className="font-bold text-gray-900">
                        {service.name}
                      </h1>
                      <p className="text-sm text-gray-500 truncate whitespace-nowrap tracking-tight w-60">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex align-middle items-center justify-center gap-2 text-gray-900 font-semibold">
                      {FormatMoney(service.price.toNumber())}
                    </div>
                  </div>
                </div>
              ))}
            </Suspense>
          </div>
        </TabsContent>
        <TabsContent value="schedule">Agenda.</TabsContent>
        <TabsContent value="reviews">Reviews</TabsContent>
      </Tabs>
      <div className="px-6">
        <Link href={`/establishment/${esblishment?.id}/appointment`}>
          <Button className="h-14 bg-primary-900 text-white w-full text-xl">
            Fazer uma reserva
          </Button>
        </Link>
      </div>
    </div>
  )
}
