import BtnWithImg from './btnWithImg'
import MenuIcon from '../public/icons/menu.webp'
import { SocialLinks } from '../types/types'
import Link from 'next/link'

type MobileNavbarProps = {
  onClick: () => void
  enabled: boolean
}

export default function MobileNavbar({ onClick, enabled }: MobileNavbarProps) {
  return enabled ? (
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
          onClick={() => onClick()}
          imgSrc={MenuIcon}
          height={20}
        />
      </ul>
    </nav>
  ) : (
    ''
  )
}
