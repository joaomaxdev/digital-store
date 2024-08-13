import { Separator } from '@/components/ui/separator'
import Filters from './Filters'

export function FilterSidebar() {
  return (
    <aside className='hidden md:block w-full md:w-1/4 bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0'>
      <h2 className='text-xl font-bold text-zinc-700'>Filtrar por</h2>

      <Separator className='my-5' />

      <Filters />
    </aside>
  )
}
