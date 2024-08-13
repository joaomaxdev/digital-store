import { NavBreadcrumbs } from './NavBreadcrumbs'
import { Button } from '@/components/ui/button'

export function NotFoundProduct() {
  return (
    <section className='px-5 py-5 md:px-24 bg-slate-100 flex flex-col gap-5 md:gap-10'>
      <NavBreadcrumbs />
      <div className='flex flex-col items-center text-center space-y-6 py-24'>
        <h2 className='text-5xl font-semibold text-zinc-700'>
          Ooops!! O produto não foi encontrado.
        </h2>
        <p className='text-gray-700 text-lg'>
          Desculpe, não conseguimos encontrar o produto que você está
          procurando.
        </p>
        <Button className='w-48' onClick={() => window.history.back()}>
          Voltar
        </Button>
      </div>
    </section>
  )
}
