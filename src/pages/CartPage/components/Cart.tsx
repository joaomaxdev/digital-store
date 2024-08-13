import { useCartStore } from '@/stores/useCartStore'
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

import { formatCurrencyBRL } from '@/lib/currency'
import { LabeledInput } from './LabeledInput'

export const Cart = () => {
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
    <div className='p-8 bg-white rounded-lg shadow-lg grow hidden lg:block'>
      <div className='mb-6'>
        <Table>
          <TableHeader>
            <TableRow className='uppercase'>
              <TableHead className='font-bold text-zinc-700'>
                Meu Carrinho
              </TableHead>
              <TableHead className='text-zinc-700'>Quantidade</TableHead>
              <TableHead className='text-zinc-700'>Unitário</TableHead>
              <TableHead className='text-zinc-700'>Total</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {productsInCart.map(({ product, quantity }, index) => (
              <TableRow className='!border-b' key={index}>
                <TableCell className='py-2'>
                  <div className='flex flex-col min-[1210px]:flex-row min-[1210px]:items-center gap-4'>
                    <img
                      src={product.thumbnails[0].url}
                      alt={product.thumbnails[0].altText}
                      className={cn(
                        'w-24 h-24 p-2 object-contain rounded-md',
                        product.thumbnails[0].bgColor
                      )}
                    />
                    <div>
                      <p className='font-bold text-zinc-800'>{product.name}</p>
                      <p className='text-sm font-medium text-gray-800 space-x-2'>
                        <span className='text-zinc-400'>Cor:</span>
                        <span>{product.colors[0].label}</span>
                      </p>
                      <p className='text-sm font-medium text-gray-800 space-x-2'>
                        <span className='text-zinc-400'>Tamanho:</span>
                        <span>{product.sizes[0]}</span>
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell className='py-2'>
                  <div className='flex items-center gap-2'>
                    <Button
                      variant='outline'
                      onClick={() => handleDecrease(product.id)}
                    >
                      -
                    </Button>
                    <Input
                      type='number'
                      value={quantity}
                      readOnly
                      className='max-w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                    />
                    <Button
                      variant='outline'
                      onClick={() => handleIncrease(product.id)}
                    >
                      +
                    </Button>
                  </div>

                  <Button
                    variant='link'
                    onClick={() => removeFromCart(product.id)}
                    className='text-xs underline text-zinc-600 hover:text-error p-0'
                  >
                    Remover item
                  </Button>
                </TableCell>

                <TableCell className='align-top'>
                  <div className='flex flex-col'>
                    <span className='text-zinc-300 line-through text-center'>
                      {formatCurrencyBRL(product.originalPrice)}
                    </span>
                    <span className='text-base font-bold text-zinc-700'>
                      {formatCurrencyBRL(product.price)}
                    </span>
                  </div>
                </TableCell>

                <TableCell className='align-top'>
                  <div className='flex flex-col'>
                    <span className='text-zinc-300 line-through text-center'>
                      {formatCurrencyBRL(product.originalPrice * quantity)}
                    </span>
                    <span className='text-base font-bold text-zinc-700'>
                      {formatCurrencyBRL(product.price * quantity)}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}

            {/* faz com que a barra de baixo apareça */}
          </TableBody>
        </Table>
      </div>

      <div className='grid grid-cols-2 gap-4'>
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
    </div>
  )
}

export default Cart
