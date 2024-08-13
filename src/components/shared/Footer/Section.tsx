import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FooterSectionProps {
  title: string
  children: ReactNode
  className?: string
}

export function FooterSection({
  title,
  children,
  className,
}: FooterSectionProps) {
  return (
    <div
      className={cn('flex flex-col items-start md:max-w-[135px]', className)}
    >
      <h3 className='font-semibold mb-7 text-lg'>{title}</h3>
      {children}
    </div>
  )
}
