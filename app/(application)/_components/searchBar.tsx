import { Button } from '@/components/ui/button'
import { ComponentProps } from 'react'
import { FiSearch } from 'react-icons/fi'
import { GiSettingsKnobs } from 'react-icons/gi'
import { twMerge } from 'tailwind-merge'

export function SearchBar({ className, ...props }: ComponentProps<'div'>) {
  return (
    <form className="w-full flex items-center gap-3">
      <div
        className={twMerge(
          'fw-full flex gap-3 justify-center p-4 bg-blueGray-100 items-center rounded-xl h-11 w-full',
          className,
        )}
        {...props}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <FiSearch size={24} className="text-blueGray-500" />
        </div>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="w-full h-12 px-4 rounded-md bg-transparent text-blueGray-500 outline-none"
        />
      </div>

      <Button
        size="icon"
        color="warning"
        aria-label="Take a photo"
        type="submit"
        className="h-11 w-11 phone:w-14 rounded-md flex items-center justify-center bg-primary-900 p-0 text-white"
      >
        <GiSettingsKnobs size={24} />
      </Button>
    </form>
  )
}
