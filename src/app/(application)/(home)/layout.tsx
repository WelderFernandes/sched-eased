'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { Button } from '@/src/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FaCalendarAlt, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import { Header } from '../_components/header'

export default function AplicationLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const session = useSession()

  return (
    <div>
      <Header.Root>
        <Header.Content>
          <Header.Title className="text-neutral-900" title="Home" />
        </Header.Content>
        <Sheet>
          <SheetTrigger>
            {session.status === 'authenticated' ? (
              <Avatar className="w-12 h-12">
                <AvatarImage src={session.data.user.image as string} />
                <AvatarFallback>
                  <FaUser className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
            ) : (
              <Header.Icon icon={FaUser} className="w-8 h-8" />
            )}
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Faça o login</SheetTitle>
              <SheetDescription>
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
                      onClick={() => signOut()}
                      className="w-full text-primary-900 text-md flex gap-4 ring-2 ring-primary-600"
                      variant="outline"
                    >
                      Sair
                      <FaSignOutAlt size={14} className="text-primary-900" />
                    </Button>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Header.Root>
      {children}
    </div>
  )
}
