import { Skeleton } from '@/components/ui/skeleton'

export function ProductsPageSkeleton() {
  return (
    <div className='px-5 pt-9 pb-24 md:pb-32 md:px-24 bg-slate-100'>
      <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between md:items-center mb-8'>
        <Skeleton className='hidden md:block h-6 w-1/3 bg-gray-200' />
        <Skeleton className='h-16 w-full md:w-80 bg-gray-200' />
        <Skeleton className='md:hidden h-6 w-3/4 bg-gray-200' />
      </div>
      <div className='flex flex-col gap-7 md:flex-row md:items-start'>
        <div className='hidden md:block w-64'>
          <Skeleton className='h-96 w-full bg-gray-200' />
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-7 flex-1'>
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className='flex flex-col gap-2'>
              <Skeleton className='h-40 w-full bg-gray-200' />
              <Skeleton className='h-16 w-full bg-gray-200' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
