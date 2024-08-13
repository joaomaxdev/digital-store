import { Search } from './Search'
import { Nav } from './Nav'
import { RegisterButton } from '../RegisterButton'
import { LoginButton } from '../LoginButton'
import { Logo } from '../Logo'
import { ShoppingCart } from './ShoppingCart'

export function DesktopHeader() {
  return (
    <header className='bg-white shadow-md border md:px-24 py-8'>
      <div className='mx-auto flex items-center gap-10'>
        <div className='flex-1 flex items-center space-x-4'>
          <Logo variant='default' className='h-11' />
          <Search />
        </div>

        <div className='flex items-center space-x-16'>
          <div className='space-x-4'>
            <RegisterButton />
            <LoginButton />
          </div>

          <ShoppingCart />
        </div>
      </div>

      <Nav />
    </header>
  )
}
