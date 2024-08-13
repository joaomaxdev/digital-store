import { NavLink } from 'react-router-dom'

import { NAV_ITEMS } from '@/constants'

interface NavProps {
  onLinkClickClose?: () => void
}
export function Nav({ onLinkClickClose }: NavProps) {
  return (
    <nav className='mt-12 flex-1'>
      <ul className='flex flex-col md:flex-row md:items-center gap-6'>
        {NAV_ITEMS.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className='text-gray-700 hover:text-primary'
              onClick={onLinkClickClose}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
