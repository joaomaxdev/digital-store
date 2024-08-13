interface ProductPriceProps {
  price: number
  originalPrice: number
  discount?: number
}

export function ProductPrice({
  price,
  originalPrice,
  discount,
}: ProductPriceProps) {
  const discountedPrice = discount
    ? originalPrice - (originalPrice * discount) / 100
    : price

  return (
    <div>
      <div className='flex items-end mt-4'>
        <span className='text-base font-semibold text-zinc-700'>
          R${' '}
          <span className='text-4xl'>
            {discountedPrice.toFixed(2).split('.')[0]},
            <span className='text-2xl'>
              {discountedPrice.toFixed(2).split('.')[1]}
            </span>
          </span>
        </span>

        {originalPrice && (
          <span className='line-through ml-2 text-gray-500'>
            R$ {originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {discount && (
        <div className='mt-1 text-sm text-green-600'>
          {discount}% de desconto
        </div>
      )}
    </div>
  )
}
