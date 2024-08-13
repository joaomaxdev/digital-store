import { Product } from '@/types'
import { Badge } from '@/components/ui/badge'

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div>
      <h1 className='text-2xl md:text-4xl font-bold text-zinc-800'>
        {product.name}
      </h1>

      <p className='text-gray-500 text-xs mt-2'>
        {product.category} | {product.brand} | REF: {product.ref}
      </p>

      <div className='flex items-center gap-2 mt-2'>
        <span className='text-yellow-500'>★★★★☆</span>

        <Badge className='bg-amber-500 hover:bg-amber-500/90 rounded-sm'>
          {product.rating} ★
        </Badge>

        <span className='text-gray-400'>({product.reviews} avaliações)</span>
      </div>
    </div>
  )
}
