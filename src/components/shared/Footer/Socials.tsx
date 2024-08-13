import { Facebook, Instagram, Twitter } from 'lucide-react'

export function FooterSocials() {
  return (
    <div className='flex space-x-4 mt-7'>
      <Facebook className='h-5 w-5 text-neutral-300' />
      <Instagram className='h-5 w-5 text-neutral-300' />
      <Twitter className='h-5 w-5 text-neutral-300' />
    </div>
  )
}
