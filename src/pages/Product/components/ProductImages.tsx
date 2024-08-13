import Slider, { Settings } from 'react-slick'

import { Image } from '@/types'
import { cn } from '@/lib/utils'

interface ProductImagesProps {
  images: Image[]
  thumbnails: Image[]
}

export function ProductImages({ thumbnails }: ProductImagesProps) {
  const carouselSettings: Settings = {
    customPaging: function (i: number) {
      return (
        <img
          src={`${thumbnails[i].url}`}
          alt={`${thumbnails[i].altText}`}
          className={cn(
            'w-28 h-24 object-contain py-7 px-4 rounded-md cursor-pointer',
            thumbnails[i].bgColor
          )}
        />
      )
    },
    arrows: false,
    dots: true,
    dotsClass: 'product-carousel slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className='w-full md:w-1/2 flex flex-col gap-5'>
      <div className='slider-container'>
        <Slider {...carouselSettings}>
          {thumbnails.map(({ url, altText, bgColor }, index) => (
            <img
              key={index}
              src={url}
              alt={altText}
              className={cn(
                'w-full object-contain rounded-lg px-12 py-20 md:px-24 md:py-40 md:min-h-[560px]',
                bgColor
              )}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}
