import { useEffect } from 'react'

import { Cart } from './components/Cart'
import { CartMobile } from './components/CartMobile'
import { SidebarCart } from './components/SidebarCart'

export function CartPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='relative bg-slate-100 px-8 md:px-24 mx-auto pt-12 md:pb-12 flex flex-col lg:flex-row items-start gap-4'>
      <Cart />
      <CartMobile />
      <SidebarCart />
    </div>
  )
}
