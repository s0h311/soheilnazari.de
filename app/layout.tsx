import '../styles/global.css'
import { Kanit } from 'next/font/google'
import { useState } from 'react'
import Navbar from '../components/navbar'
import useDeviceType from '../hooks/useDeviceType'
import MobileNavbar from '../components/mobileNavbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome | Soheil Nazari',
  description: 'Introduction',
}

const kanit = Kanit({
  weight: '300',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-kanit',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <main className={`${kanit.variable} py-10 font-kanit grid place-items-center`}>
      <section className='w-[90dvw] md:w-[65dvw] grid place-items-center gap-20'>
        <MobileNavbar />
        <Navbar />
        {children}
      </section>
    </main>
  )
}
