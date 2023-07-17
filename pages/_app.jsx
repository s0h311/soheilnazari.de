import '../styles/global.css'
import { Kanit } from 'next/font/google'
import { useState } from 'react'
import Navbar from '../components/navbar'
import useDeviceType from '../composables/useDeviceType'
import MobileNavbar from '../components/MobileNavbar'
import SideMenu from '../components/SideMenu'

const kanit = Kanit({
  weight: '300',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-kanit',
})

export default function App({ Component, pageProps }) {
  const { isMobile } = useDeviceType()
  const [showSideMenu, setShowSideMenu] = useState(false)

  return (
    <main className={`${kanit.variable} py-10 font-kanit grid place-items-center`}>
      {!showSideMenu ? (
        <div className="w-[90dvw] md:w-[65dvw] grid place-items-center">
          {isMobile ? (
            <MobileNavbar
              enabled={!showSideMenu}
              onClick={() => setShowSideMenu(!showSideMenu)}
            />
          ) : (
            <Navbar />
          )}
          <br className="mb-20" />
          <Component {...pageProps} />
        </div>
      ) : (
        <SideMenu onClose={() => setShowSideMenu(!showSideMenu)} />
      )}
    </main>
  )
}
