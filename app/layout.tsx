import type { Metadata } from 'next'
import { Plus_Jakarta_Sans as PlusJakartaSans } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './(application)/_components/header'
import Head from 'next/head'

const plusJakartaSans = PlusJakartaSans({
  subsets: ['latin'],
  variable: '--font-plus_Jakarta_Sans',
})

export const metadata: Metadata = {
  title: 'SchedEase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br" className={plusJakartaSans.variable as string}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
