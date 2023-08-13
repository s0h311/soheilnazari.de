'use client'

import Link from 'next/link'
import BtnWithImg from './btnWithImg'
import { Menus, SocialLinks } from '../types/types'
import useDeviceType from '../hooks/useDeviceType'

export default function Navbar() {
  const { isMobile } = useDeviceType()

  return !isMobile ? (
    <nav className='flex items-center justify-center relative w-full xl:w-[45dvw] bg-[#2f323a] rounded-3xl p-6'>
      <ul className='flex space-x-6 xl:space-x-10 justify-center list-none'>
        <button>
          <Link
            className='hover:underline'
            href='/'
          >
            S | N
          </Link>
        </button>
        {Menus.map((menu) => (
          <li key={menu.id}>
            <Link
              className='hover:underline'
              href={menu.route}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className='absolute right-4 rounded-3xl p-4 flex space-x-4 list-none'>
        {SocialLinks.map((link) => (
          <li key={link.id}>
            <BtnWithImg
              onClick={() => window.open(link.url)}
              imgSrc={link.icon}
              height={25}
            />
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    ''
  )
}
