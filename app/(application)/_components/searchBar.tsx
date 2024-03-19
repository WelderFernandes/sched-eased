import { ComponentProps } from 'react'
import { FiSearch } from 'react-icons/fi'
import { GiSettingsKnobs } from 'react-icons/gi'
import { twMerge } from 'tailwind-merge'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { IoCloseSharp } from 'react-icons/io5'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Button } from '@/components/ui/button'
import { BsQuestionSquareFill } from 'react-icons/bs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Ratings } from './rating'

export function SearchBar({ className, ...props }: ComponentProps<'div'>) {
  const toggleGroupItemClasses =
    'hover:bg-primary-50 data-[state=on]:bg-primary-50 data-[state=on]:ring-1 data-[state=on]:ring-primary-900 text-base data-[state=off]:bg-white data-[state=off]:text-gray-500'

  return (
    <div className="w-full flex items-center gap-3">
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

      <Drawer>
        <DrawerTrigger asChild>
          <Button
            size="icon"
            color="warning"
            aria-label="Take a photo"
            type="submit"
            className="h-11 w-11 phone:w-14 rounded-md flex items-center justify-center bg-primary-900 p-0 text-white"
          >
            <GiSettingsKnobs size={24} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-primary-50">
          <DrawerHeader className="text-left flex gap-2 bg-primary-50 items-center justify-between pt-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="icon"
                  color="warning"
                  aria-label="Take a photo"
                  type="submit"
                  className="h-11 w-11 p-1 phone:w-14 rounded-md flex items-center justify-center bg-white shadow-none"
                >
                  <BsQuestionSquareFill size={24} className="text-orange-400" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                Aqui voce pode filtrar a busca de acordo sua necessidade.
              </PopoverContent>
            </Popover>

            <DrawerTitle>Filtrar</DrawerTitle>
            <DrawerClose asChild>
              <Button className="bg-slate-300 p-1 shadow-none">
                <IoCloseSharp
                  size={24}
                  className="text-primary-50 font-extrabold"
                />
              </Button>
            </DrawerClose>
            {/* <DrawerDescription>
              
            </DrawerDescription> */}
          </DrawerHeader>
          <div className="w-full bg-white px-5 py-6">
            <h1 className="text-lg font-bold text-primary-900 mb-4">
              Categorias
            </h1>
            <ToggleGroup
              type="multiple"
              className="w-full flex flex-wrap gap-2"
            >
              <ToggleGroupItem className={toggleGroupItemClasses} value="Todos">
                Todos
              </ToggleGroupItem>
              <ToggleGroupItem
                value="Corte de cabelo básico"
                className={toggleGroupItemClasses}
              >
                Corte de cabelo básico
              </ToggleGroupItem>
              <ToggleGroupItem
                className={toggleGroupItemClasses}
                value="Coloração"
              >
                Coloração
              </ToggleGroupItem>
              <ToggleGroupItem
                className={toggleGroupItemClasses}
                value="Tratamento"
              >
                Tratamento
              </ToggleGroupItem>
              <ToggleGroupItem
                className={toggleGroupItemClasses}
                value="Massage"
              >
                Massage
              </ToggleGroupItem>
              <ToggleGroupItem
                className={toggleGroupItemClasses}
                value="Kids haircut"
              >
                Kids haircut
              </ToggleGroupItem>
            </ToggleGroup>
            <h1 className="text-lg font-bold text-primary-900 mt-4 mb-4">
              Ranking
            </h1>
            <Ratings rating={2.5} variant="yellow" totalStars={4} size={28} />
          </div>
          <DrawerFooter className="bg-white">
            <Button
              variant="default"
              className="w-full bg-primary-900 text-white font-extrabold"
            >
              Aplicar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
