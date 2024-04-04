'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { FaLocationDot, FaUser } from 'react-icons/fa6'
import { FaCalendarAlt, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/src/components/ui/popover'
import { Button } from '@/src/components/ui/button'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/src/components/ui/alert-dialog'
import useFetcher from '@/src/actions/fetcher'

interface Position {
  coords: {
    latitude: number
    longitude: number
    altitude: number | null
    accuracy: number
    altitudeAccuracy: number | null
    heading: number | null
    speed: number | null
  }
  timestamp: number
}

export function Header() {
  const route = useRouter()
  const session = useSession()
  const [location, setLocation] = useState<Position | null>(null)
  const [open, setOpen] = useState(false)

  function getLocation() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (result) {
          if (result.state === 'granted') {
            console.log({ result })
            // Se a permissão foi concedida, você pode obter a localização
            navigator.geolocation.getCurrentPosition((data: Position) => {
              setLocation(data)
            })
          } else if (result.state === 'prompt') {
            // Se a permissão não foi decidida ainda, você pode pedir ao usuário
            // navigator.geolocation.getCurrentPosition(successCallback);
            setOpen(true)
          } else if (result.state === 'denied') {
            // Se a permissão foi negada, você pode instruir o usuário a habilitar a permissão
            setOpen(true)
          }
          result.onchange = function () {
            console.log(result.state)
          }
        })
    } else {
      console.log('Geolocalização não é suportada por este navegador.')
    }
  }

  useEffect(() => {
    if (location === null) {
      getLocation()
    }
  })

  function handleGetPermissionLocation() {
    return navigator.geolocation.getCurrentPosition((data: Position) => {
      setLocation(data)
    })
  }

  const url = `https://api.opencagedata.com/geocode/v1/json?q=${location?.coords.latitude}%2C${location?.coords.longitude}&key=52da374ae27b4ed7aec253d709459b0b`
  const { data, isLoading, error } = useFetcher(url)

  return (
    <header className="flex justify-between h-20 items-center mx-4  ">
      <div className="items-center">
        <div className="flex gap-2 align-middle items-center">
          <FaLocationDot size={14} className="text-primary-900" />
          <h3 className="text-medium text-gray-500">
            {isLoading
              ? 'Carregando...'
              : data?.results[0]?.components.city || error}
          </h3>
        </div>
        <h1 className="text-xl text-primary-900 font-bold ">
          {session && session?.data?.user?.name
            ? session?.data?.user?.name
            : 'Bem vindo(a)'}
        </h1>
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-primary-900 font-bold">
              Heey, Tudo bem? 🗺️
            </AlertDialogTitle>
            <AlertDialogDescription>
              <p className="text-gray-500 text-wrap">
                Para melhorar sua experiência em nosso site, solicitamos sua
                permissão para acessar sua localização.
              </p>
              <p className="text-gray-500 text-wrap">
                Clique no botão abaixo e permita o acesso. Caso precise de
                ajuda, fale com o administrador do sistema. 🌐📍
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-primary-900 text-white font-extralight shadow-md hover:bg-primary-800"
              onClick={() => handleGetPermissionLocation()}
            >
              Permitir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div>
        <div className="flex gap-3 items-center">
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage src="#" />
                <AvatarFallback>
                  <FaUser size={14} className="text-primary-900" />
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <ul className="flex flex-col gap-4 ">
                <li>
                  <Button
                    onClick={() => route.push('/login')}
                    className="w-full text-primary-900 text-md flex gap-2 ring-2 ring-primary-600 p-2 rounded-sm  items-center justify-center align-middle "
                  >
                    Login
                    <FaSignInAlt size={14} className="text-primary-900" />
                  </Button>
                </li>
                <li>
                  <Button
                    className="w-full text-primary-900 text-md flex gap-4"
                    variant="outline"
                  >
                    <div className="flex items-center gap-2 justify-start align-middle ">
                      Minha conta
                      <FaUser size={14} className="text-primary-900" />
                    </div>
                  </Button>
                </li>
                <li>
                  <Button
                    className="w-full text-primary-900 text-md flex gap-4"
                    variant="outline"
                  >
                    <div className="flex items-center gap-2 justify-start align-middle ">
                      Reservas
                      <FaCalendarAlt size={14} className="text-primary-900" />
                    </div>
                  </Button>
                </li>
                <li className="pt-6">
                  <Button
                    onClick={() => signOut()}
                    className="w-full text-primary-900 text-md flex gap-4 ring-2 ring-primary-600"
                    variant="outline"
                  >
                    Sair
                    <FaSignOutAlt size={14} className="text-primary-900" />
                  </Button>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  )
}
