import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { UserIcon } from 'lucide-react'

interface UserAvatarProps {
  imageUrl: string
  alt: string
}

export function UserAvatar({ imageUrl, alt }: UserAvatarProps) {
  return (
    <Avatar>
      <AvatarImage alt={alt} src={imageUrl} />
      <AvatarFallback>
        <UserIcon />
      </AvatarFallback>
    </Avatar>
  )
}
