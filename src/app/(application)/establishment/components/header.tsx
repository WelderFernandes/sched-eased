import { Button } from '@/src/components/ui/button'
import { useRouter } from 'next/navigation'
import { BsArrowLeft } from 'react-icons/bs'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const route = useRouter()
  return (
    <header className="flex gap-1 align-middle items-center px-2 py-6">
      <Button
        variant="ghost"
        className="flex gap-1 items-center"
        onClick={() => route.back()}
      >
        <BsArrowLeft size={24} />
      </Button>
      <h1 className="font-bold text-balance ">{title}</h1>
    </header>
  )
}
