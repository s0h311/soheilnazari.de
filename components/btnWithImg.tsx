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
    <div className={className}>
      <Image
        onClick={() => onClick()}
        className='cursor-pointer'
        src={imgSrc}
        height={height}
        alt={`button for ${title}`}
      />
    </div>
  )
}
