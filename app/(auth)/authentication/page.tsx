import { Button } from '@/components/ui/button'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import Link from 'next/link'

export default function Authentication() {
  return (
    <div className=" px-5 flex flex-col h-screen ">
      <h1 className="text-3xl font-extrabold py-6 text-primary-900">
        Autenticação
      </h1>
      <p className="text-gray-500 font-sm tracking-tighter leading-5">
        Por favor insira o código de autenticação que enviamos para seu e-mail
      </p>
      <div className="flex flex-col align-middle justify-center items-center h-full mb-8 w-full my-6">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot
              index={0}
              className="w-11 h-11  rounded-sm mr-2 border"
            />
            <InputOTPSlot
              index={1}
              className="w-11 h-11  rounded-sm mr-2 border"
            />
            <InputOTPSlot
              index={2}
              className="w-11 h-11  rounded-sm mr-2 border"
            />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot
              index={3}
              className="w-11 h-11  rounded-sm mr-2 border"
            />
            <InputOTPSlot
              index={4}
              className="w-11 h-11  rounded-sm mr-2 border"
            />
            <InputOTPSlot
              index={5}
              className="w-11 h-11  rounded-sm mr-2 border"
            />
          </InputOTPGroup>
        </InputOTP>
        <Button className="w-full h-12 text-white bg-primary-900 rounded-md mt-4 font-extrabold my-10">
          Enviar
        </Button>
        <Link
          href="#"
          className="text-primary-900 font-bold text-sm hover:text-primary-800 ml-2"
        >
          Não recebi o codigo!
        </Link>
      </div>
    </div>
  )
}
