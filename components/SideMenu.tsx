import { Menus } from '../types/types'
import Link from 'next/link'
import CloseIcon from '../public/icons/close.webp'
import BtnWithImg from '../components/btnWithImg'

interface SideMenuProps {
  onClose: () => void
}

export default function SideMenu({ onClose }: SideMenuProps) {
  return (
    <div className="grid place-items-center gap-10 w-[90dvw]">
      <BtnWithImg
        className="place-self-end"
        onClick={() => onClose()}
        imgSrc={CloseIcon}
        height={20}
      />
      {Menus.map((menu) => (
        <Link
          className="border rounded-3xl p-3 w-2/5 text-center"
          key={menu.id}
          href={menu.route}
          onClick={() => onClose()}
        >
          {menu.title}
        </Link>
      ))}
    </div>
  )
}
