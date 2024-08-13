import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import { Banner } from './Banner'
import { BANNER_DATA } from '@/constants'

import 'swiper/css'
import 'swiper/css/pagination'

export function HeroSection() {
  const [banner1] = BANNER_DATA

  return (
    <div className='bg-neutral-100 pb-5'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide key={index}>
            <Banner {...banner1} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
