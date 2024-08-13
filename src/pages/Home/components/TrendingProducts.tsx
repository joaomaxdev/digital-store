import { ProductList } from '@/components/shared/ProductList'
import { Section } from '@/components/shared/Section'
import { PRODUCTS } from '@/constants'

import { sortProductsByDiscount } from '@/lib/sortBy'

export function TrendingProducts() {
  const sortedProducts = sortProductsByDiscount(PRODUCTS)

  return (
    <Section
      title='Produtos em alta'
      link={{ text: 'Ver todos', href: '#' }}
      className='pb-20 md:pb-32 pt-0'
    >
      <ProductList products={sortedProducts} />
    </Section>
  )
}
