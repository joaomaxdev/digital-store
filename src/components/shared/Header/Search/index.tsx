import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'

export function Search() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (query) {
        navigate(`/produtos?q=${query}`)
      } else {
        navigate('/produtos')
      }
    }
  }

  return (
    <div className='relative w-full md:flex-1'>
      <Input
        type='text'
        placeholder='Pesquisar produto...'
        className='w-full md:flex-1 border-none bg-neutral-200 py-7 placeholder:text-neutral-500'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <SearchIcon className='absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-500' />
    </div>
  )
}
