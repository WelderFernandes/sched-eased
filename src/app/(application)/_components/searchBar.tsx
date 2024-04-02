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
} from '@/src/components/ui/drawer'
import { IoCloseSharp } from 'react-icons/io5'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/src/components/ui/popover'

import { Button } from '@/src/components/ui/button'
import { BsQuestionSquareFill } from 'react-icons/bs'
import { ToggleGroup, ToggleGroupItem } from '@/src/components/ui/toggle-group'
import { Ratings } from './rating'
import { Label } from '@/src/components/ui/label'
import { ScrollArea } from '@/src/components/ui/scroll-area'

export function SearchBar({ className, ...props }: ComponentProps<'div'>) {
  const toggleGroupItemClasses =
    'hover:bg-primary-50 data-[state=on]:bg-primary-50 ring-1 ring-primary-200 data-[state=on]:ring-1 data-[state=on]:ring-primary-900 text-base data-[state=off]:bg-white data-[state=off]:text-gray-500'

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
        <DrawerContent className="bg-primary-50 flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px]">
          <ScrollArea className="">
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
                    <BsQuestionSquareFill
                      size={24}
                      className="text-orange-400"
                    />
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
                className="w-full flex flex-wrap gap-2 align-middle justify-start items-start"
              >
                <ToggleGroupItem
                  className={toggleGroupItemClasses}
                  value="Todos"
                >
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

              <h1 className="text-lg font-bold text-primary-900 my-4">
                Distancia
              </h1>
              <div className="flex gap-8 items-center ">
                <div className="grid w-fit max-w-sm items-center gap-1">
                  <Label htmlFor="de" className="text-primary-500 text-sm">
                    De
                  </Label>
                  <div className="flex gap-2 items-end">
                    <input
                      type="text"
                      id="de"
                      placeholder="0.1"
                      className="flex text-center max-w-14 border-2 border-collapse border-spacing-2 border-primary-900 text-primary-900 focus:outline-none h-10 focus-visible:ring-1"
                    />
                    <h3 className="text-primary-900 font-extralight">Km</h3>
                  </div>
                </div>
                <div className="grid w-fit max-w-sm items-center gap-1">
                  <Label htmlFor="de" className="text-primary-500 text-sm">
                    Ate
                  </Label>
                  <div className="flex gap-2 items-end">
                    <input
                      type="text"
                      id="de"
                      placeholder="1"
                      // className="flex text-center max-w-14 border-primary-900 text-primary-900 focus:outline-none focus-visible:ring-0"
                      className="flex text-center max-w-14 border-2 border-collapse border-spacing-2 border-primary-900 text-primary-900 focus:outline-none h-10 focus-visible:ring-1"
                    />
                    <h3 className="text-primary-900 font-extralight">Km</h3>
                  </div>
                </div>
              </div>
            </div>
            <DrawerFooter className="bg-white">
              <Button
                variant="default"
                className="w-full bg-primary-900 text-white font-extrabold h-[54px]"
              >
                Aplicar
              </Button>
            </DrawerFooter>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
