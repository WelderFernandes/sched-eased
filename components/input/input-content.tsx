import { Input } from '../ui/input'

interface InputContentProps {
  type: string
  id: string
  placeholder: string
}

export function InputContent({ type, id, placeholder }: InputContentProps) {
  return (
    <Input
      type={type}
      id={id}
      placeholder={placeholder}
      className="border-none"
    />
  )
}
