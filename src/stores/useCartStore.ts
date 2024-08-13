import { Product } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartState = {
  productsInCart: { product: Product; quantity: number }[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      productsInCart: [],
      addToCart: (product) =>
        set((state) => {
          const productInCart = state.productsInCart.find(
            (p) => p.product.id === product.id
          )

          if (productInCart) {
            return {
              productsInCart: state.productsInCart.map((p) =>
                p.product.id === product.id
                  ? { ...p, quantity: p.quantity + 1 }
                  : p
              ),
            }
          }

          return {
            productsInCart: [...state.productsInCart, { product, quantity: 1 }],
          }
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          productsInCart: state.productsInCart.filter(
            (p) => p.product.id !== productId
          ),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          productsInCart: state.productsInCart.map((p) =>
            p.product.id === productId ? { ...p, quantity } : p
          ),
        })),
      clearCart: () => set({ productsInCart: [] }),
    }),
    {
      name: 'cart-storage', // nome da chave no localStorage
    }
  )
)
