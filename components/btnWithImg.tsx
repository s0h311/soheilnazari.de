import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type BtnWithImgProps = {
  onClick: () => void
  imgSrc: string | StaticImport
  title?: string
  height?: number
  width?: number
  className?: string
}

export default function BtnWithImg({ onClick, imgSrc, title, height, width, className }: BtnWithImgProps) {
  return (
    <button
      className={className}
      onClick={() => onClick()}
      aria-label={`button for ${title}`}
    >
      <Image
        src={imgSrc}
        height={height}
        alt=''
      />
    </button>
  )
}
