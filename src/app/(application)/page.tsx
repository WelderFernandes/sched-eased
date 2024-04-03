'use client'
import Image from 'next/image'
import { CgArrowTopRightR } from 'react-icons/cg'
import { SearchBar } from './_components/searchBar'
import { Card, CardContent } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { Separator } from '@/src/components/ui/separator'
import { EsblishmentItem } from './_components/esblishmentItem-item'
import { FaLocationDot, FaStar } from 'react-icons/fa6'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/src/components/ui/carousel'
import { getEstablishments } from '@/src/actions/get-establishments'
import { useEffect, useState } from 'react'
import { Establishment } from '@prisma/client'

export default function Home() {
  const [establishment, setEstablishment] = useState<Establishment[]>([])

  async function refreshEsblishment() {
    const data = await getEstablishments(3)
    setEstablishment(data)
  }

  useEffect(() => {
    refreshEsblishment()
  }, [])

  return (
    <div className="px-4 py-5 flex flex-col ">
      <Card className=" bg-transparent relative shadow-inherit">
        <CardContent className="w-full h-full p-0 m-0 ">
          <div className="w-full h-full ">
            <Image
              src="/home-card.png"
              alt="nextui logo"
              width={500}
              height={500}
              quality={100}
              className=" w-full h-full block object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4">
            <Button
              color="default"
              className="bg-primary-900 h-10 text-ellipsis font-bold text-white"
            >
              Reservando agora
            </Button>
          </div>
          <Image
            src="/home-card-pic.png"
            alt="nextui logo"
            width={500}
            height={500}
            quality={100}
            className="phone:max-w-48 sm:min-w-96  absolute bottom-0 right-0"
          />
        </CardContent>
        <Separator />
      </Card>
      <SearchBar className="my-4" />
      <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">
        Loja mais próxima
      </h1>
      {establishment.map((establishment) => (
        <EsblishmentItem
          key={establishment.id}
          className="mt-4"
          esblishmentItem={establishment}
        />
      ))}

      <h1 className="text-xl font-extrabold text-gray-900 tracking-tight py-4">
        Mais recomendado
      </h1>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full rounded-xl">
              <Image
                src="/carrosel-pic.png"
                alt="nextui logo"
                width={500}
                height={500}
                quality={100}
                className="w-full h-full block object-cover"
              />
              <Button
                color="default"
                className="bg-primary-900 h-10 text-ellipsis font-bold text-white absolute bottom-0 right-0 rounded-s-md rounded-e-none rounded-br-xl"
              >
                Reservando agora
              </Button>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">
                Master piece Barbershop - Haircut styling
              </h2>
              <div className="flex gap-1 items-center">
                <FaLocationDot size={14} className="text-primary-900" />
                <p className="text-sm text-gray-500">Joga Expo Centre (2 km)</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={14} className="text-yellow-400" />
                <p className="text-sm text-gray-500">5.0</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full rounded-xl">
              <Image
                src="/carrosel-pic.png"
                alt="nextui logo"
                width={500}
                height={500}
                quality={100}
                className="w-full h-full block object-cover"
              />
              <Button
                color="default"
                className="bg-primary-900 h-10 text-ellipsis font-bold text-white absolute bottom-0 right-0 rounded-s-md rounded-e-none rounded-br-xl"
              >
                Reservando agora
              </Button>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">
                Master piece Barbershop - Haircut styling
              </h2>
              <div className="flex gap-1 items-center">
                <FaLocationDot size={14} className="text-primary-900" />
                <p className="text-sm text-gray-500">Joga Expo Centre (2 km)</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={14} className="text-yellow-400" />
                <p className="text-sm text-gray-500">5.0</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full rounded-xl">
              <Image
                src="/carrosel-pic.png"
                alt="nextui logo"
                width={500}
                height={500}
                quality={100}
                className="w-full h-full block object-cover"
              />
              <Button
                color="default"
                className="bg-primary-900 h-10 text-ellipsis font-bold text-white absolute bottom-0 right-0 rounded-s-md rounded-e-none rounded-br-xl"
              >
                Reservando agora
              </Button>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">
                Master piece Barbershop - Haircut styling
              </h2>
              <div className="flex gap-1 items-center">
                <FaLocationDot size={14} className="text-primary-900" />
                <p className="text-sm text-gray-500">Joga Expo Centre (2 km)</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaStar size={14} className="text-yellow-400" />
                <p className="text-sm text-gray-500">5.0</p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {establishment.map((establishment) => (
        <EsblishmentItem
          key={establishment.id}
          className="mt-4"
          esblishmentItem={establishment}
        />
      ))}

      <div className="flex items-center align-middle justify-center pt-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 border-primary-900 font-extrabold text-primary-900 focus:ring-2 bg-transparent ring-offset-2"
        >
          Ver mais
          <CgArrowTopRightR size={24} />
        </Button>
      </div>
    </div>
  )
}
