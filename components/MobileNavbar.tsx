'use client'

import BtnWithImg from './btnWithImg'
import MenuIcon from '@/public/icons/menu.webp'
import { SocialLinks } from '@/types/types'
import Link from 'next/link'
import SideMenu from '@/components/sideMenu'
import { useState } from 'react'
import useDeviceType from '@/hooks/useDeviceType'

export default function MobileNavbar() {
  const { isMobile } = useDeviceType()
  const [showSideMenu, setShowSideMenu] = useState(false)

  return isMobile ? (
    showSideMenu ? (
      <SideMenu onClose={() => setShowSideMenu(!showSideMenu)} />
    ) : (
      <nav className='flex items-center w-full relative'>
        <button>
          <Link
            className='text-xl hover:underline'
            href='/'
          >
            S | N
          </Link>
        </button>
        <ul className='flex items-center space-x-5 absolute right-0 list-none'>
          {SocialLinks.map((link) => (
            <li key={link.id}>
              <BtnWithImg
                onClick={() => window.open(link.url)}
                imgSrc={link.icon}
                height={25}
              />
            </li>
          ))}
          <BtnWithImg
            onClick={() => setShowSideMenu(true)}
            imgSrc={MenuIcon}
            height={20}
          />
        </ul>
      </nav>
    )
  ) : (
    ''
  )
}
