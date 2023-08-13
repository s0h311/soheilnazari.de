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
      <nav className='w-[70dvw] full relative'>
        <button>
          <BtnWithImg
            className='absolute right-0 top-0'
            onClick={() => onClose()}
            imgSrc={CloseIcon}
            height={20}
          />
        </button>
        <ul className='mt-10 list-none'>
          {Menus.map((menu) => (
            <li
              className='border rounded-3xl p-3 mb-5 text-center'
              key={menu.id}
            >
              <button
                className='w-full'
                onClick={() => onClose()}
              >
                <Link href={menu.route}>{menu.title}</Link>
              </button>
            </li>
          ))}
        </ul>
        <hr className='border[0.5px] w-full -mb-10' />
      </nav>
    </>
  )
}
