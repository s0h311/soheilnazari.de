import Link from 'next/link'
import BtnWithImg from './btnWithImg'
import { Menus, SocialLinks } from '../types/types'

export default function Navbar() {
  return (
    <div className='flex items-center justify-center relative w-full xl:w-[45dvw] bg-[#2f323a] rounded-3xl p-6'>
      <div className='flex space-x-6 xl:space-x-10 justify-center'>
        <Link
          className='hover:underline'
          href='/'
        >
          S | N
        </Link>
        {Menus.map((menu) => (
          <Link
            className='hover:underline'
            key={menu.id}
            href={menu.route}
          >
            {menu.title}
          </Link>
        ))}
      </div>
      <div className='absolute right-4 rounded-3xl p-4 flex space-x-4'>
        {SocialLinks.map((link) => (
          <BtnWithImg
            onClick={() => window.open(link.url)}
            key={link.id}
            imgSrc={link.icon}
            height={25}
          />
        ))}
      </div>
    </div>
  )
}
