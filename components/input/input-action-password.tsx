import { ButtonHTMLAttributes, ElementType } from 'react'
import { Button } from '../ui/button'

interface InputActionPasswordProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}
export function InputPassword({
  icon: Icon,
  ...rest
}: InputActionPasswordProps) {
  return (
    <Button
      {...rest}
      variant="ghost"
      size="icon"
      // onClick={() => setShowPassword(!showPassword)}
    >
      <Icon className="w-5 h-5 text-primary-900" />
    </Button>
  )
}
