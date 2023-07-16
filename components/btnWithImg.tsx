import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { MouseEventHandler } from 'react'

interface BtnWithImgProps {
  onClick: () => void
  imgSrc: string | StaticImport
  title?: string
  height?: number
  weight?: number
}

export default function BtnWithImg({ onClick, imgSrc, title, height, weight }: BtnWithImgProps) {
  return (
    <Image
      onClick={() => onClick()}
      className="cursor-pointer"
      src={imgSrc}
      height={height}
      alt={`button for ${title}`}
    />
  )
}
