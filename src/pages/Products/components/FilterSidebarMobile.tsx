import { Filter } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Filters from './Filters'
import { Separator } from '@/components/ui/separator'

export function FilterSidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='md:hidden h-16 w-16'>
          <Filter />
        </Button>
      </SheetTrigger>

      <SheetContent side={'left'}>
        <SheetHeader className='mt-5'>
          <SheetTitle className='text-start text-zinc-700'>
            Filtrar por
          </SheetTitle>
          <SheetDescription className='sr-only'>
            Filtro de Produtos
          </SheetDescription>
        </SheetHeader>

        <Separator className='my-5' />

        <Filters />
      </SheetContent>
    </Sheet>
  )
}
