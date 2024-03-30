'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa6'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
// import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

interface User {
  name: string
  email: string
  password: string
  confirmPassword?: string
  phone: string
}

export default function Register() {
  const [phone, setPhone] = useState<string>()
  const [data, setData] = useState<User>()

  // const route = useRouter()

  const schema = z
    .object({
      name: z.string().min(1, { message: 'O nome é obrigatório' }),
      email: z
        .string()
        .min(1, { message: 'O email é obrigatório' })
        .email({ message: 'Insira um email valido' }),
      password: z
        .string()
        .min(1, { message: 'A senha é obrigatória' })
        .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
      confirmPassword: z.string(),
      phone: z.string().min(1, { message: 'O telefone é obrigatório' }),
    })
    .refine((values) => values.password === values.confirmPassword, {
      message: 'As senhas precisam ser iguais',
      path: ['confirmPassword'],
    })

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  function handleChangePhone(value: string) {
    setPhone(value)
    console.log(`Phone number changed to ${value}`)
  }

  return (
    <div className=" px-5 flex flex-col h-screen justify-center">
      <h1 className="text-3xl font-extrabold py-6 text-primary-900">
        Registre-se aqui
      </h1>
      <p className="text-gray-500 font-sm tracking-tighter leading-5">
        Por favor, insira seus dados para concluir o processo de registro da sua
        conta
      </p>
      <form
        onSubmit={handleSubmit((data) => setData(data))}
        className="w-full py-6 flex flex-col gap-4 align-middle justify-center items-center "
        action="#"
        method=""
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Nome</Label>
          <div className="w-full flex border align-middle items-center rounded-md shadow-sm px-4 border-gray-300 h-12">
            <FaUser className="w-5 h-5 text-primary-900" />
            <Input
              type="text"
              id="name"
              placeholder="Nome"
              className="border-none"
              {...register('name')}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">E-mail</Label>
          <div className="w-full flex border align-middle items-center rounded-md shadow-sm px-4 border-gray-300 h-12">
            <FaEnvelope className="w-5 h-5 text-primary-900" />
            <Input
              type="email"
              id="email"
              placeholder="joão@gmail.com"
              className="border-none"
              {...register('email')}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cellphone">Celular</Label>
          <div className="w-full flex border align-middle items-center rounded-md shadow-sm px-4 border-gray-300 h-12">
            <PhoneInput
              {...register('phone')}
              placeholder="Digite seu celular"
              value={phone}
              defaultCountry="BR"
              onChange={(value) => handleChangePhone(value as string)}
              initialValueFormat="national"
              countryCallingCodeEditable={false}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
          <p className="text-gray-500 font-sm tracking-tighter leading-5">
            {phone}
          </p>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Criar Senha</Label>
          <div className="w-full flex border align-middle items-center rounded-md shadow-sm px-4 border-gray-300 h-12">
            <FaLock className="w-5 h-5 text-primary-900" />
            <Input
              type="text"
              id="password"
              placeholder="******"
              className="border-none"
              {...register('password')}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="confirmPassword">Confirmar Senha</Label>
          <div className="w-full flex border align-middle items-center rounded-md shadow-sm px-4 border-gray-300 h-12">
            <FaLock className="w-5 h-5 text-primary-900" />
            <Input
              type="text"
              id="confirmPassword"
              placeholder="******"
              className="border-none"
              {...register('confirmPassword')}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword?.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-primary-900 text-white h-14 text-md font-extrabold"
        >
          Cadastrar
        </Button>
      </form>

      <p className="text-gray-500 font-sm tracking-tighter leading-5 text-center pb-6">
        Ja possui uma conta?{' '}
        <Link
          href="/login"
          className="text-primary-900 font-bold text-sm tracking-tighter leading-5"
        >
          login
        </Link>
      </p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  )
}
