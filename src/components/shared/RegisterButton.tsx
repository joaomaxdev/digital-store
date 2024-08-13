import { Link } from 'react-router-dom'

export function RegisterButton() {
  return (
    <Link to='/cadastre-se' className='underline text-center text-neutral-600'>
      Cadastrar
    </Link>
  )
}
