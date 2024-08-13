import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'

interface DiscountBadgeProps {
  discount: string
  className?: string
}

const DiscountBadge = ({ discount, className }: DiscountBadgeProps) => (
  <Badge
    className={cn(
      'bg-lime-200 hover:bg-lime-200/80 text-zinc-600 font-bold rounded-full mb-4 w-24 h-8 flex justify-center items-center text-xs sm:text-sm md:text-base',
      className
    )}
  >
    {discount}
  </Badge>
)

export default DiscountBadge
