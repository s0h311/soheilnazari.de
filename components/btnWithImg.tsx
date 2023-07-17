import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface BtnWithImgProps {
  onClick: () => void
  imgSrc: string | StaticImport
  title?: string
  height?: number
  weight?: number
  className?: string
}

export default function BtnWithImg({ onClick, imgSrc, title, height, weight, className }: BtnWithImgProps) {
  return (
    <div className={className}>
      <Image
        onClick={() => onClick()}
        className="cursor-pointer"
        src={imgSrc}
        height={height}
        alt={`button for ${title}`}
      />
    </div>
  )
}
