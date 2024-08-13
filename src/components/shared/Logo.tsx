import { Link } from 'react-router-dom'

import logoFooter from '@/assets/logo_footer.svg'
import logo from '@/assets/logo.svg'

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant: 'default' | 'footer'
}

export function Logo({ variant, ...props }: LogoProps) {
  const selectedLogo = variant === 'default' ? logo : logoFooter

  return (
    <Link to='/'>
      <img src={selectedLogo} {...props} alt='Digital Store Logo' />
    </Link>
  )
}
