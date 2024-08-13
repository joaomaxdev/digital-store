import { Skeleton } from '@/components/ui/skeleton'

export function ProductPageSkeleton() {
  return (
    <div className='px-5 pt-5 pb-20 md:pb-32 md:px-24 bg-slate-100 flex flex-col gap-5 md:gap-10'>
      <Skeleton className='h-4 bg-gray-200 rounded-md w-1/3 mb-4' />

      <section className='flex flex-col md:flex-row gap-10 md:gap-10'>
        <Skeleton className='w-full md:w-1/2 h-64 md:h-[560px] bg-gray-200 rounded-md' />

        <div className='w-full md:max-w-md flex flex-col gap-5'>
          <Skeleton className='h-6 bg-gray-200 rounded-md w-3/4' />
          <Skeleton className='h-6 bg-gray-200 rounded-md w-1/4' />

          <div className='mt-5 flex flex-col gap-1'>
            <h3 className='font-bold text-sm text-zinc-500'>
              Descrição do produto
            </h3>
            <Skeleton className='h-4 bg-gray-200 rounded-md w-full' />
            <Skeleton className='h-4 bg-gray-200 rounded-md w-full' />
            <Skeleton className='h-4 bg-gray-200 rounded-md w-3/4' />
          </div>

          <div className='mt-8'>
            <h3 className='font-bold text-sm text-zinc-500'>Tamanho</h3>
            <div className='flex gap-2 mt-2'>
              {Array(3)
                .fill('')
                .map((_, idx) => (
                  <Skeleton
                    key={idx}
                    className='h-10 w-10 bg-gray-200 rounded-md'
                  />
                ))}
            </div>
          </div>

          <div className='mt-8'>
            <h3 className='font-bold text-sm text-zinc-500'>Cor</h3>
            <div className='flex gap-3 mt-2'>
              {Array(3)
                .fill('')
                .map((_, idx) => (
                  <Skeleton
                    key={idx}
                    className='h-8 w-8 bg-gray-200 rounded-full'
                  />
                ))}
            </div>
          </div>

          <div className='mt-8 flex justify-start'>
            <Skeleton className='h-12 w-full md:w-3/4 bg-gray-200 rounded-md' />
          </div>
        </div>
      </section>
    </div>
  )
}
