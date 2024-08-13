import { Button } from '@/components/ui/button'
import specialOfferImage from '@/assets/special_offer.svg' // Substitua pelo caminho correto da sua imagem

export function SpecialOffer() {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center md:gap-8 pt-16 pb-12 md:py-28 px-5 bg-white overflow-hidden'>
      <div className='flex-1 flex justify-center max-w-xl relative'>
        <div className='absolute -top-7 w-full max-w-72 md:max-w-max md:w-[466px] md:h-[466px] rounded-full bg-gradient-to-b from-violet-300 to-transparent opacity-75 aspect-square' />
        <img
          src={specialOfferImage}
          alt='Air Jordan edição de colecionador'
          className='w-full max-h-[330px] relative z-10 px-3 md:px-0'
        />
      </div>

      <div className='flex-1 mt-28 max-w-xl md:mt-0 md:ml-10'>
        <span className='text-amber-400 md:text-primary text-sm font-bold'>
          Oferta especial
        </span>
        <h2 className='text-3xl text-zinc-600 md:text-5xl font-bold mt-4'>
          Air Jordan edição de colecionador
        </h2>
        <p className='text-zinc-600 text-base font-normal mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <Button className='mt-8 w-48 text-sm font-bold'>Ver Oferta</Button>
      </div>
    </section>
  )
}
