'use server'
import { cookies } from 'next/headers'

export interface CookieProps {
  name: string
  value: string
}
export async function SetCookie({ name, value }: CookieProps) {
  cookies().set(name, value, {
    httpOnly: true,
  })
}

export async function GetCookie(name: string) {
  return cookies().get(name)
}
