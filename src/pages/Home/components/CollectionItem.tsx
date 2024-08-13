import DiscountBadge from '@/components/shared/DiscountBadge'
import { Button } from '@/components/ui/button'

interface CollectionItemProps {
  discount: string
  title: string
  imageSrc: string
  altText: string
}
export function CollectionItem({
  altText,
  discount,
  imageSrc,
  title,
}: CollectionItemProps) {
  return (
    <div className='group bg-blue-100 p-4 rounded-lg shadow-lg relative min-h-64 overflow-hidden'>
      <img
        src={imageSrc}
        alt={altText}
        className='h-52 md:h-64 rounded-md z-0 absolute right-0 bottom-0  group-hover:rotate-6 group-hover:scale-125 transition-all'
      />
      <div className='mt-4 z-10 relative max-w-44'>
        <DiscountBadge discount={discount} />
        <h2 className='text-3xl text-zinc-800 font-bold mt-2'>{title}</h2>
        <Button
          variant={'secondary'}
          className='text-primary w-36 py-2 px-4 rounded mt-4'
        >
          Comprar
        </Button>
      </div>
    </div>
  )
}
