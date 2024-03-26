'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaEnvelope, FaEye, FaEyeLowVision, FaLock } from 'react-icons/fa6'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col p-0 m-0">
      <div className="min-h-[277px]  top-0 left-0 right-0">
        <Image
          src="/login-frame.png"
          alt="nextui logo"
          width={500}
          height={500}
          quality={100}
          className="absolute w-full top-0 left-0 right-0"
        />
        <div className="flex item-center align-middle justify-center">
          <Image
            src="/login-pic.png"
            alt="nextui logo"
            width={500}
            height={500}
            quality={100}
            className="phone:max-w-[305px] phone:max-h-[317px] align-middle justify-center object-contain bottom-[-30px] relative"
          />
        </div>
      </div>
      <Card className="z-10 flex flex-col rounded-3xl p-0 m-0 min-h-[317px] rounded-b-none shadow-none border-none">
        <CardHeader className="w-full">
          <CardTitle className="text-2xl text-primary-900">
            Bem vindo de volta 👋
          </CardTitle>
          <CardDescription className="text-gray-500 font-sm tracking-tighter leading-5">
            Por favor, insira suas informações de login abaixo para acessar sua
            conta
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full p-0 m-0 ">
          <div className="w-full px-5 py-6 flex flex-col gap-5">
            <div className="grid w-full items-center gap-1.5">
              <Label
                htmlFor="email"
                className="text-primary-900 font-extrabold text-md"
              >
                Username
              </Label>
              <div className="w-full flex border align-middle items-center rounded-md shadow-sm px-4 border-gray-300 h-12">
                <FaEnvelope className="w-5 h-5 text-primary-900" />
                <Input
                  type="text"
                  id="email"
                  placeholder="joao@gmail.com"
                  className="border-none"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label
                htmlFor="password"
                className="text-primary-900 font-extrabold text-md"
              >
                Senha
              </Label>
              <div className="w-full flex border align-middle items-center rounded-md shadow-sm pl-4 pr-2 border-gray-300 h-12">
                <FaLock className="w-5 h-5 text-primary-900" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="******"
                  className="border-none outline-none focus:outline-none focus-within:outline-none focus-within:border-none focus-within:ring-0 placeholder:flex "
                />
                {showPassword ? (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FaEyeLowVision className="w-5 h-5 text-primary-900" />
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FaEye className="w-5 h-5 text-primary-900" />
                  </Button>
                )}
              </div>
            </div>
            <div className="w-full flex justify-end gap-1.5" aria-hidden="true">
              <Link
                href="/forgot-password"
                className="text-primary-900 font-extrabold"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <Button
              className="bg-primary-900 h-12 text-ellipsis text-white text-md"
              color="primary"
            >
              Login
            </Button>
          </div>
          <p className="text-gray-500 font-sm tracking-tighter leading-5 text-center pb-6">
            Ja possui uma conta?{' '}
            <Link
              href="/login"
              className="text-primary-900 font-bold text-md tracking-tighter leading-5"
            >
              login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
