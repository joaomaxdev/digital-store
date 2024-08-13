import { useCartStore } from '@/stores/useCartStore'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { formatCurrencyBRL } from '@/lib/currency'
import { LabeledInput } from './LabeledInput'
import { Separator } from '@/components/ui/separator'

export function CartMobile() {
  const { productsInCart, removeFromCart, updateQuantity } = useCartStore()

  const handleIncrease = (productId: string) => {
    const productInCart = productsInCart.find((p) => p.product.id === productId)
    if (productInCart) {
      updateQuantity(productId, productInCart.quantity + 1)
    }
  }

  const handleDecrease = (productId: string) => {
    const productInCart = productsInCart.find((p) => p.product.id === productId)
    if (productInCart && productInCart.quantity > 1) {
      updateQuantity(productId, productInCart.quantity - 1)
    }
  }

  return (
    <div className='lg:hidden space-y-2'>
      <div className='p-8 bg-white rounded-lg shadow-lg grow block w-full'>
        {/* Mobile version */}
        <div className='space-y-5'>
          <h2 className='text-lg font-bold text-zinc-700'>Meu Carrinho</h2>

          <Separator />

          {productsInCart.map(({ product, quantity }, index) => (
            <div key={index} className='border-b pb-4'>
              <div className='flex items-center mb-4'>
                <img
                  src={product.thumbnails[0].url}
                  alt={product.thumbnails[0].altText}
                  className={cn(
                    'w-20 h-20 p-2 object-contain rounded-md',
                    product.thumbnails[0].bgColor
                  )}
                />
                <div className='ml-4'>
                  <p className='font-bold text-zinc-800'>{product.name}</p>
                  <p className='text-sm font-medium text-gray-800'>
                    <span className='text-zinc-400'>Cor:</span>{' '}
                    {product.colors[0].label}
                  </p>

                  <p className='text-sm font-medium text-gray-800'>
                    <span className='text-zinc-400'>Tamanho:</span>{' '}
                    {product.sizes[0]}
                  </p>
                </div>
              </div>

              <div className='mb-4 space-y-2'>
                <h3 className='text-zinc-700 uppercase'>Quantidade</h3>

                <div className='flex justify-center items-center'>
                  <Button
                    variant='outline'
                    className='flex-1'
                    onClick={() => handleDecrease(product.id)}
                  >
                    -
                  </Button>
                  <Input
                    type='number'
                    value={quantity}
                    readOnly
                    className='mx-2 border-none w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                  />
                  <Button
                    variant='outline'
                    className='flex-1'
                    onClick={() => handleIncrease(product.id)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className='w-full text-center'>
                <Button
                  variant='link'
                  onClick={() => removeFromCart(product.id)}
                  className='p-0 text-sm underline text-zinc-600 hover:text-error'
                >
                  Remover item
                </Button>
              </div>

              <div className='mt-3'>
                <div className='flex justify-between'>
                  <span className='text-zinc-700 uppercase'>Unitário</span>

                  <div className='flex items-center gap-1'>
                    <p className='text-sm text-zinc-600 line-through'>
                      {formatCurrencyBRL(product.originalPrice)}
                    </p>

                    <p className='text-base font-bold text-zinc-700'>
                      {formatCurrencyBRL(product.price)}
                    </p>
                  </div>
                </div>

                <div className='flex justify-between'>
                  <span className='uppercase text-zinc-700'>Total</span>

                  <div className='flex items-center gap-1'>
                    <p className='text-sm text-zinc-600 line-through'>
                      {formatCurrencyBRL(product.originalPrice * quantity)}
                    </p>

                    <p className='text-base font-bold text-zinc-700'>
                      {formatCurrencyBRL(product.price * quantity)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className='p-8 bg-white rounded-lg shadow-lg'>
        <div className='grid grid-cols-1 gap-4'>
          <LabeledInput
            id='discountCode'
            label='Cupom de desconto:'
            placeholder='Insira seu código'
            buttonLabel='OK'
            buttonOnClick={() => console.log('Aplicar cupom')}
          />

          <LabeledInput
            id='zipCode'
            label='Calcular frete:'
            placeholder='Insira seu CEP'
            buttonLabel='OK'
            buttonOnClick={() => console.log('Calcular frete')}
          />
        </div>
      </section>
    </div>
  )
}
