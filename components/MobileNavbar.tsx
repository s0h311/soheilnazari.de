import BtnWithImg from './btnWithImg'
import MenuIcon from '../public/icons/menu.webp'
import { SocialLinks } from '../types/types'
import Link from 'next/link'

interface MobileNavbarProps {
  onClick: () => void
  enabled: boolean
}

export default function MobileNavbar({ onClick, enabled }: MobileNavbarProps) {
  return enabled ? (
    <>
      <div className="flex items-center w-full relative">
        <Link
          className="text-xl hover:underline"
          href="/"
        >
          S | N
        </Link>
        <div className="flex items-center space-x-5 absolute right-0">
          {SocialLinks.map((link) => (
            <BtnWithImg
              onClick={() => window.open(link.url)}
              key={link.id}
              imgSrc={link.icon}
              height={25}
            />
          ))}
          <BtnWithImg
            onClick={() => onClick()}
            imgSrc={MenuIcon}
            height={20}
          />
        </div>
      </div>
    </>
  ) : (
    <></>
  )
}
