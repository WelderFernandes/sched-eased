import Image from 'next/image'
import { ComponentProps } from 'react'
import { FaLocationDot, FaStar } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

export function BookingItem({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(
        'w-full h-[100px] flex gap-4 justify-between  items-center',
        className,
      )}
      {...props}
    >
      <div className="flex gap-3 items-center h-[100px] p-0 m-0">
        <Image
          src="/booking-item-image.png"
          alt="nextui logo"
          width={72}
          height={72}
          className="w-fit h-fit p-0 m-0"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">
            Alana Barbershop - Haircut massage & Spa{' '}
          </h2>
          <div className="flex gap-1 items-center">
            <FaLocationDot size={14} className="text-primary-900" />
            <p className="text-sm text-gray-500">Banguntapan (5 km)</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaStar size={14} className="text-yellow-400" />
            <p className="text-sm text-gray-500">4.3</p>
          </div>
        </div>
      </div>
    </div>
  )
}
