'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa6'

export default function Register() {
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
            />
          </div>
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
            />
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="cellphone">Celular</Label>
          <div className="w-full flex border align-middle items-center rounded-md shadow-sm px-4 border-gray-300 h-12">
            <FaPhone className="w-5 h-5 text-primary-900" />
            <Input
              type="text"
              id="cellphone"
              placeholder="(00) 0000-0000"
              className="border-none"
            />
          </div>
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
            />
          </div>
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
            />
          </div>
        </div>
        <Button className="w-full bg-primary-900 text-white h-14 text-md font-extrabold">
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
    </div>
  )
}
