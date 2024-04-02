import { Button } from '@/src/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import Link from 'next/link'
import { FaArrowLeftLong, FaEnvelope } from 'react-icons/fa6'

export default function ForgotPassword() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between h-20 items-center mx-4  fix">
        <Link href="/login">
          <FaArrowLeftLong size={24} className="text-primary-900" />
        </Link>
      </header>
      <Card className="flex flex-col rounded-3xl p-0 m-0 h-full  min-h-[317px] rounded-b-none shadow-none border-none">
        <CardHeader className="w-full pb-12">
          <CardTitle className="text-2xl text-primary-900">
            Esqueceu sua senha?
          </CardTitle>
          <CardDescription className="text-gray-500 font-sm tracking-tighter leading-5">
            Por favor insira seu e-mail para o processo de redefinição de senha
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full p-0 m-0 ">
          <div className="w-full px-5 flex flex-col gap-5">
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
            <Button
              className="bg-primary-900 h-12 text-ellipsis text-white text-md"
              color="primary"
            >
              Enviar
            </Button>
          </div>
          <p className="text-gray-500 font-sm tracking-tighter leading-5 text-center py-6">
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
