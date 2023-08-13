import { Menus } from '@/types/types'
import Link from 'next/link'
import CloseIcon from '@/public/icons/close.webp'
import BtnWithImg from './btnWithImg'

type SideMenuProps = {
  onClose: () => void
}

export default function SideMenu({ onClose }: SideMenuProps) {
  return (
    <>
      <nav className='grid w-[90dvw] gap-10 relative'>
        <button>
          <BtnWithImg
            className='absolute right-0 top-0'
            onClick={() => onClose()}
            imgSrc={CloseIcon}
            height={20}
          />
        </button>
        <ul className='grid place-items-center gap-10 w-full list-none'>
          {Menus.map((menu) => (
            <li
              className='border rounded-3xl p-3 w-2/5 text-center'
              key={menu.id}
            >
              <Link
                href={menu.route}
                onClick={() => onClose()}
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
