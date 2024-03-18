import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FaLocationDot } from 'react-icons/fa6'

export function Header() {
  return (
    <header className="flex justify-between h-20 items-center mx-4  ">
      <div className="items-center">
        <div className="flex gap-2 align-middle items-center">
          <FaLocationDot size={14} className="text-primary-900" />
          <h3 className="text-medium text-gray-500">Cariacica</h3>
        </div>
        <h1 className="text-xl text-primary-900 font-bold ">
          Welder Fernandes
        </h1>
      </div>
      <div>
        <div className="flex gap-3 items-center">
          {/* <Avatar src="https://github.com/welderfernandes.png" /> */}
          <Avatar>
            <AvatarImage src="https://github.com/welderfernandes.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
