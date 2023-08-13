import '@/styles/global.css'
import { Kanit } from 'next/font/google'
import Navbar from '@/components/Navbar'
import MobileNavbar from '@/components/MobileNavbar'
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
    <html lang='en'>
      <body>
        <main className={`${kanit.variable} py-10 font-kanit grid place-items-center`}>
          <section className='w-[90dvw] md:w-[65dvw] grid place-items-center gap-20'>
            <MobileNavbar />
            <Navbar />
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
