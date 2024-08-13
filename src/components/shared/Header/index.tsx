import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

export function Header() {
  return (
    <>
      <div className='hidden lg:block'>
        <DesktopHeader />
      </div>
      <div className='block lg:hidden'>
        <MobileHeader />
      </div>
    </>
  )
}
