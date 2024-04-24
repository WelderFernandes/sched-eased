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
  width = 135,
  height = 135,
}: EstablishmentImageProps) {
  return (
    <Image
      className="p-0 m-0 object-fill rounded-md shadow-sm"
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      quality={100}
    />
  )
}
