import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from 'lucide-react'

import { useCartStore } from '@/stores/useCartStore'
import { Badge } from '@/components/ui/badge'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { formatCurrencyBRL } from '@/lib/currency'

export function PopoverCart() {
  const productsInCart = useCartStore((state) => state.productsInCart)
  const clearCart = useCartStore((state) => state.clearCart)
  const maxVisibleProducts = 3

  const calculateTotal = () => {
    const totalPrice = productsInCart
      .reduce(
        (total, { product, quantity }) => total + product.price * quantity,
        0
      )
      .toFixed(2)

    return formatCurrencyBRL(Number.parseFloat(totalPrice))
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className='indicator cursor-pointer'>
          {productsInCart.length > 0 && (
            <Badge
              variant='destructive'
              className='indicator-item badge w-5 border-none text-white font-bold'
            >
              {productsInCart.length}
            </Badge>
          )}
          <ShoppingCartIcon
            className={cn(
              'h-6 w-6 text-gray-700',
              productsInCart.length > 0 && 'text-primary'
            )}
          />
        </div>
      </PopoverTrigger>

      <PopoverContent className='w-80 p-7 mt-2 sm:mr-2'>
        <div className='grid'>
          <div>
            <h4 className='font-bold text-base text-zinc-800 leading-none'>
              Meu Carrinho
            </h4>
          </div>

          <Separator className='my-5' />

          {productsInCart.length > 0 ? (
            <>
              <div className='grid gap-6'>
                {productsInCart
                  .slice(0, maxVisibleProducts)
                  .map(({ product }, index) => (
                    <div
                      key={index}
                      className='grid grid-cols-3 items-center gap-4'
                    >
                      <img
                        src={product.images[0].url}
                        alt={product.images[0].altText}
                        className={cn(
                          'w-20 h-16 p-2 object-contain rounded',
                          product.thumbnails[0].bgColor
                        )}
                      />

                      <div className='col-span-2'>
                        <p className='text-sm font-medium'>{product.name}</p>
                        <p className='text-sm text-muted-foreground'>
                          R${product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                {productsInCart.length > maxVisibleProducts && (
                  <p className='text-center text-sm text-muted-foreground'>
                    E mais {productsInCart.length - maxVisibleProducts}{' '}
                    produtos.
                    <br />
                    <Link to='/produtos/carrinho' className='text-primary'>
                      Ver todos no carrinho
                    </Link>
                  </p>
                )}
              </div>

              <Separator className='my-5' />

              <div className='flex flex-col gap-5'>
                <div className='flex justify-between font-bold'>
                  <span className='text-zinc-800'>Valor total:</span>

                  <span className='text-primary'>{calculateTotal()}</span>
                </div>

                <div className='flex justify-between'>
                  <Button className='p-0' variant='link' onClick={clearCart}>
                    Esvaziar
                  </Button>

                  <Button asChild>
                    <Link className='hover:text-white' to='/produtos/carrinho'>
                      Ver Carrinho
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <p className='text-center text-sm text-muted-foreground'>
              Seu carrinho está vazio.
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
