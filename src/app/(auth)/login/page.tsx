'use client'
import { Button } from '@/src/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  FaArrowLeftLong,
  FaEnvelope,
  FaEye,
  FaEyeLowVision,
  FaLock,
} from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { cn } from '@/src/lib/utils'
import { signIn } from 'next-auth/react'
export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const route = useRouter()

  const schema = z.object({
    email: z
      .string()
      .min(1, { message: 'O email é obrigatório' })
      .email({ message: 'Insira um email valido' }),
    password: z
      .string()
      .min(1, { message: 'A senha é obrigatória' })
      .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
  })

  type FormData = z.infer<typeof schema>

  function handleBackHomePage() {
    route.back()
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

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
        <Button
          variant="ghost"
          className="relative top-3 left-3 "
          onClick={handleBackHomePage}
        >
          <FaArrowLeftLong size={24} className="text-primary-900" />
        </Button>
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
        <CardContent className="w-full p-0 m-0 px-5 py-6 gap-5 flex flex-col">
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="w-full flex flex-col gap-5"
          >
            <div className="grid w-full items-center gap-1.5">
              <Label
                htmlFor="email"
                className="text-primary-900 font-extrabold text-md"
              >
                Username
              </Label>
              <div
                className={cn(
                  'w-full flex border align-middle items-center rounded-md shadow-sm px-4 border-gray-300 h-12',
                  errors?.email && 'ring-red-500 ring',
                )}
              >
                <FaEnvelope className="w-5 h-5 text-primary-900" />
                <Input
                  type="text"
                  id="email"
                  {...register('email')}
                  placeholder="joao@gmail.com"
                  className="border-none"
                />
              </div>
              {errors?.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label
                htmlFor="password"
                className="text-primary-900 font-extrabold text-md"
              >
                Senha
              </Label>
              <div
                className={cn(
                  'w-full flex border align-middle items-center rounded-md shadow-sm px-4 border-gray-300 h-12',
                  errors?.email && 'ring-red-500 ring',
                )}
              >
                <FaLock className="w-5 h-5 text-primary-900" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  {...register('password')}
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
              {errors?.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
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
              type="submit"
              className="bg-primary-900 h-12 text-ellipsis text-white text-md"
              color="primary"
            >
              Login
            </Button>
          </form>

          <p className="flex gap-2 align-middle justify-center items-center text-gray-500 font-sm tracking-tighter leading-5 text-center pb-6">
            Não tem uma conta?
            <Link
              href="/register"
              className="text-primary-900 font-bold text-md tracking-tighter leading-5"
            >
              Registrar
            </Link>
          </p>
        </CardContent>
        <CardFooter className="w-full flex flex-col">
          <Button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            aria-label="Sign in with Google"
            className="flex items-center bg-white border border-button-border-light rounded-md p-0.5 pr-3 h-12"
          >
            <div className="flex items-center justify-center bg-white w-9 h-9 rounded-l">
              <Image
                src="/google.png"
                alt="Google logo"
                width={20}
                height={20}
              />
            </div>
            <span className="text-md text-google-text-gray tracking-wider">
              Entrar com Google
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
