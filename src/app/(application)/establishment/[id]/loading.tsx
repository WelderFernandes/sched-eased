import Image from 'next/image'

export default function loading() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-50 flex justify-center items-center bg-primary-900 rounded-md overflow-hidden">
      <Image
        src="/logo.png"
        alt="loading"
        width={100}
        height={100}
        className="animate-pulse"
      />
      {/* <div className="flex flex-col px-6">
        <Skeleton className="h-[300px] w-full rounded-md bg-gray-300 animate-pulse" />
        <h1 className="text-xl text-primary-900 font-bold p-3">
          <Skeleton className="h-8 w-32 bg-gray-300 animate-pulse" />
        </h1>
        <h2 className="text-zinc-500 font-thin text-sm flex items-center gap-3">
          <Skeleton className="h-8 w-32 bg-gray-300 animate-pulse" />
          <Skeleton className="h-8 w-32 bg-gray-300 animate-pulse" />
        </h2>
        <div className="flex py-6 px-0 items-center align-middle justify-between">
          <Skeleton className="h-8 w-8 bg-gray-300 animate-pulse" />
          <Skeleton className="h-8 w-8 bg-gray-300 animate-pulse" />
          <Skeleton className="h-8 w-8 bg-gray-300 animate-pulse" />
          <Skeleton className="h-8 w-8 bg-gray-300 animate-pulse" />
        </div>
      </div> */}
    </div>
  )
}
