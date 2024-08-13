import { Link } from 'react-router-dom'
import DiscountBadge from './DiscountBadge'
import { formatCurrencyBRL } from '@/lib/currency'

interface ProductItemProps {
  discount?: number
  title: string
  price: number
  originalPrice: number
  imageSrc: string
  altText: string
  id: string
}

export const ProductItem = ({
  discount,
  title,
  price,
  originalPrice,
  imageSrc,
  altText,
  id,
}: ProductItemProps) => (
  <Link to={`/produtos/${id}`} className='flex flex-col'>
    <div className='bg-white p-4 rounded shadow-lg relative'>
      {discount && (
        <DiscountBadge
          discount={`${discount}% OFF`}
          className='absolute top-4 left-4 w-[78px] h-8 sm:w-20 md:w-24'
        />
      )}
      <img
        src={imageSrc}
        alt={altText}
        className='h-auto md:h-auto rounded-md mt-8 md:mt-auto mb-4'
      />
    </div>

    <div className='mt-4 z-10 relative'>
      <span className='text-xs font-bold text-gray-500'>Tênis</span>
      <h2 className='text-sm md:text-2xl text-zinc-600 font-normal mt-2 block w-full whitespace-nowrap overflow-hidden text-ellipsis'>
        {title}
      </h2>
      <div className='flex items-center mt-2'>
        <span className='line-through text-sm md:text-xl text-zinc-400 whitespace-nowrap overflow-hidden text-ellipsis'>
          {formatCurrencyBRL(originalPrice)}
        </span>
        <span className='text-base md:text-2xl font-bold text-zinc-800 ml-2'>
          {formatCurrencyBRL(price)}
        </span>
      </div>
    </div>
  </Link>
)
