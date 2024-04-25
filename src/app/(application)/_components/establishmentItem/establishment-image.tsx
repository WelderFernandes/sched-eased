import Image from 'next/image'

interface EstablishmentImageProps {
  imageUrl: string | null
  width?: number
  height?: number
  alt: string
}

export function EstablishmentImage({
  imageUrl,
  alt,
  width = 150,
  height = 150,
}: EstablishmentImageProps) {
  return (
    <Image
      className="p-0 m-0 rounded-md shadow-sm w-[100px] h-[100px]"
      loading="lazy"
      src={imageUrl || '/images/placeholder.png'}
      alt={alt}
      width={width}
      height={height}
      quality={100}
    />
  )
}
