import { Button } from '@/components/ui/button'

interface BannerProps {
  title: string
  subtitle: string
  description: string
  buttonText: string
  imageSrc: string
  ornamentSrc?: string
  altText: string
}

export function Banner({
  title,
  subtitle,
  description,
  buttonText,
  imageSrc,
  ornamentSrc,
  altText,
}: BannerProps) {
  return (
    <section className='text-center md:text-start p-5 pb-10 flex flex-col md:flex-row md:items-center md:justify-between md:py-10 md:px-24 relative overflow-hidden'>
      {ornamentSrc && (
        <img
          src={ornamentSrc}
          alt='Imagem ornamento, partículas brilhantes'
          className='h-36 w-36 absolute md:top-20 md:right-9 right-0 transform translate-x-1/2 md:translate-x-0 z-0'
        />
      )}

      <div className='md:w-1/2 order-2 md:order-1 flex flex-col md:items-start gap-5'>
        <h2 className='text-primary font-bold text-sm md:text-base'>
          {subtitle}
        </h2>
        <h1 className='text-4xl font-extrabold text-zinc-950'>
          {title}{' '}
          <span role='img' aria-label='fire'>
            🔥
          </span>
        </h1>
        <p className='text-gray-600'>{description}</p>
        <Button className='text-white px-8 py-3 w-full md:w-56 h-12'>
          {buttonText}
        </Button>
      </div>

      <div className='md:w-full md:order-2 z-10'>
        <img src={imageSrc} alt={altText} className='w-full h-auto' />
      </div>
    </section>
  )
}
