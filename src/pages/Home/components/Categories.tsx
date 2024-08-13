import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CategoryItem } from './CategoryItem'
import { CATEGORY_ITEMS } from '@/constants'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

export default function Categories() {
  return (
    <>
      <div className='hidden sm:grid grid-cols-3 md:grid-cols-5 gap-12'>
        {CATEGORY_ITEMS.map((item, index) => (
          <CategoryItem key={index} iconSrc={item.iconSrc} label={item.label} />
        ))}
      </div>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className='mySwiper max-w-full sm:hidden'
      >
        {CATEGORY_ITEMS.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryItem iconSrc={item.iconSrc} label={item.label} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
