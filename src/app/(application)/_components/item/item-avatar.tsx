import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { UserIcon } from 'lucide-react'

interface ItemAvatarProps {
  imageUrl: string
  alt: string
}

export function ItemAvatar({ imageUrl, alt }: ItemAvatarProps) {
  return (
    <Avatar>
      <AvatarImage alt={alt} src={imageUrl} />
      <AvatarFallback>
        <UserIcon />
      </AvatarFallback>
    </Avatar>
  )
}
