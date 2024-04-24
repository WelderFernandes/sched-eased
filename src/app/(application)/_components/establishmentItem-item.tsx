import { Establishment } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { FaLocationDot, FaStar } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

export interface EsblishmentItemProps extends ComponentProps<'div'> {
  esblishmentItem: Establishment
}

export function EsblishmentItem({
  className,
  esblishmentItem,
  ...props
}: EsblishmentItemProps) {
  return (
    <div
      className={twMerge(
        'w-full h-[100px] flex gap-4 justify-between  items-center',
        className,
      )}
      {...props}
    >
      <Link
        href={`/establishment/${esblishmentItem.id?.trim()}`}
        className="flex gap-3 items-center h-[100px] p-0 m-0"
      >
        <div className="w-32 h-24 bg-cover rounded-md overflow-hidden">
          <Image
            src={esblishmentItem.imageUrl || '/logo.png'}
            alt="nextui logo"
            width={100}
            height={100}
            className="w-full h-full p-0 m-0 object-fill rounded-md shadow-sm"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">{esblishmentItem.name}</h2>
          <div className="flex gap-1 items-center">
            <FaLocationDot size={14} className="text-primary-900" />
            <p className="text-sm text-gray-500">{esblishmentItem.address}</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaStar size={14} className="text-yellow-400" />
            <p className="text-sm text-gray-500">4.3</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
