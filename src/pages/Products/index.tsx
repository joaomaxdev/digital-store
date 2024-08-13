import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { ProductItem } from '@/components/shared/ProductItem'
import { FilterSidebar } from './components/FilterSidebar'
import { Dropdown } from './components/Dropdown'
import { FilterSidebarMobile } from './components/FilterSidebarMobile'

import { PRODUCTS } from '@/constants'

import { ProductsPageSkeleton } from './loading'
import { Frown } from 'lucide-react'

const options = [
  { value: 'relevant', label: 'mais relevantes' },
  { value: 'low-to-high', label: 'menor preço' },
  { value: 'high-to-low', label: 'maior preço' },
]

export function ProductsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const [loadingProducts, setLoadingProducts] = useState(true)
  const [products, setProducts] = useState<typeof PRODUCTS | null>(null)

  useEffect(() => {
    // Simulando chamada à API
    setLoadingProducts(true)
    setTimeout(() => {
      if (query) {
        const filteredProducts = PRODUCTS.filter((p) =>
          p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
        setProducts(filteredProducts)
      } else {
        setProducts(PRODUCTS)
      }
      setLoadingProducts(false)
    }, 650) // delay
  }, [query])

  if (!products || loadingProducts) {
    return <ProductsPageSkeleton />
  }

  return (
    <div className='px-5 pt-9 pb-24 md:pb-32 md:px-24 bg-slate-100'>
      <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between md:items-center mb-8'>
        {query ? (
          <h1 className='text-zinc-600 order-2 md:order-1'>
            <span className='text-base font-bold'>
              Resultados para "{query}" -{' '}
            </span>
            {products.length} produtos
          </h1>
        ) : (
          <div className='order-2 md:order-1' />
        )}

        <div className='order-1 md:order-2 flex gap-2'>
          <Dropdown options={options} placeholder='Ordenar por:' />
          <FilterSidebarMobile />
        </div>
      </div>

      <div className='flex flex-col gap-7 md:flex-row md:items-start'>
        <FilterSidebar />

        {products.length > 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-3 gap-7 flex-1'>
            {products.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center h-full w-full py-10 gap-2'>
            <Frown className='w-20 h-20 text-zinc-400 mb-4' />

            <div>
              <h2 className='text-2xl text-center font-bold text-zinc-600 mb-2'>
                Nada encontrado
              </h2>

              <p className='text-zinc-500'>
                Desculpe, não conseguimos encontrar produtos correspondentes à
                sua busca.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
