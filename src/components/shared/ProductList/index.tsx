import { ProductItem } from '@/components/shared/ProductItem'
import { SimplifiedProduct } from '@/types'

interface ProductListProps {
  products: SimplifiedProduct[]
  count?: number
}

export const ProductList = ({ products, count = 8 }: ProductListProps) => (
  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
    {products.slice(0, count).map((product, index) => (
      <ProductItem key={index} {...product} />
    ))}
  </div>
)
