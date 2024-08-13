import { ReactNode, useState } from 'react'
import { cn } from '@/lib/utils'

interface ProductOptionsProps<T> {
  title: string
  items: T[]
  renderItem: (item: T, isActive: boolean, onClick: () => void) => ReactNode
  className?: string
}

export function ProductOptions<T>({
  title,
  items,
  renderItem,
  className,
}: ProductOptionsProps<T>) {
  const [selectedItem, setSelectedItem] = useState<T | null>(null)

  return (
    <div className={cn('mt-3', className)}>
      <h3 className='font-bold text-sm text-zinc-500'>{title}</h3>
      <div className='flex flex-wrap gap-3 mt-2 text-zinc-600'>
        {items.map((item) =>
          renderItem(item, item === selectedItem, () => setSelectedItem(item))
        )}
      </div>
    </div>
  )
}
