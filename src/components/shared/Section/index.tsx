import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface SectionProps {
  title: string
  titleAlign?: 'left' | 'center'
  link?: {
    text: string
    href: string
  }
  children: ReactNode
  className?: string
}

export const Section = ({
  title,
  titleAlign = 'left',
  link,
  children,
  className,
}: SectionProps) => (
  <section
    className={cn('px-5 pt-9 pb-1 md:pb-4 md:px-24 bg-slate-100', className)}
  >
    <div
      className={cn(
        `flex items-center mb-5 w-full`,
        titleAlign === 'center' ? 'sm:justify-center' : 'justify-between'
      )}
    >
      <h2
        className={cn(
          `text-base sm:text-2xl text-zinc-500 font-bold`,
          titleAlign === 'center' ? 'sm:text-center' : 'text-left'
        )}
      >
        {title}
      </h2>
      {link && (
        <Button
          variant={'link'}
          className='text-primary font-normal text-lg flex justify-center items-center gap-2 group'
        >
          <span>Ver todos</span>
          <ArrowRight
            width={16}
            className='font-bold group-hover:scale-105 group-hover:translate-x-1 transition-all'
          />
        </Button>
      )}
    </div>
    {children}
  </section>
)
