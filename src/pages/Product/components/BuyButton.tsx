import { Button } from '@/components/ui/button'
import { useCartStore } from '@/stores/useCartStore'
import { Product } from '@/types'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

interface BuyButtonProps {
  product: Product
}

export function BuyButton({ product }: BuyButtonProps) {
  const addToCart = useCartStore((state) => state.addToCart)
  const navigate = useNavigate()

  function handleAddToCart() {
    addToCart(product)
    toast.success(`Produto ${product.name} adicionado ao carrinho`, {
      description: 'Você pode ver os detalhes no seu carrinho.',
      action: {
        label: 'Ver carrinho',
        onClick: () => navigate('/produtos/carrinho'),
      },
      classNames: {
        actionButton: '!bg-primary',
      },
    })
  }
  return (
    <Button
      onClick={handleAddToCart}
      className='mt-12 md:mt-7 w-full h-12 md:max-w-56 bg-yellow-500 hover:bg-yellow-500/90 text-white font-bold py-2 rounded-md text-base'
    >
      COMPRAR
    </Button>
  )
}
