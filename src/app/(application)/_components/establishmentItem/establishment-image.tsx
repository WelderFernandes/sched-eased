import Image from 'next/image'

interface EstablishmentImageProps {
  imageUrl: string
  width?: number
  height?: number
  alt: string
}

export function EstablishmentImage({
  imageUrl,
  alt,
  width = 500,
  height = 500,
}: EstablishmentImageProps) {
  return (
    <Image
      className="p-0 m-0 object-fill rounded-md shadow-sm w-32 h-24"
      loading="lazy"
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      quality={100}
    />
  )
}
