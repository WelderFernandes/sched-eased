import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FaLocationDot, FaUser } from 'react-icons/fa6'
import { FaCalendarAlt, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex justify-between h-20 items-center mx-4  ">
      <div className="items-center">
        <div className="flex gap-2 align-middle items-center">
          <FaLocationDot size={14} className="text-primary-900" />
          <h3 className="text-medium text-gray-500">Cariacica</h3>
        </div>
        <h1 className="text-xl text-primary-900 font-bold ">
          Welder Fernandes
        </h1>
      </div>
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
                  <Link
                    href="/login"
                    className="w-full text-primary-900 text-md flex gap-2 ring-2 ring-primary-600 p-2 rounded-sm  items-center justify-center align-middle "
                  >
                    Login
                    <FaSignInAlt size={14} className="text-primary-900" />
                  </Link>
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
