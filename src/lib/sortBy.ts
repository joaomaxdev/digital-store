import { SimplifiedProduct } from '@/types'

export function sortProductsByDiscount(
  products: SimplifiedProduct[]
): SimplifiedProduct[] {
  return products.sort((a, b) => {
    if (a.discount && b.discount) {
      return b.discount - a.discount
    } else if (a.discount) {
      return -1
    } else if (b.discount) {
      return 1
    } else {
      return 0
    }
  })
}
