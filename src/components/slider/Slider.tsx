import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper'
import { createSelector } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '../../redux/hook'
import { RootState } from '../../redux/store'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'


export function Slider() {
  const {id} = useParams()

  const selectImages = createSelector(
    (state: RootState) => state.items,
    ({items}) => items.filter(item => item.id !== id).sort((a, b) => b.price - a.price)
  )

  const images = useAppSelector(selectImages) 

  return (
    <>
      <h3 className='slider__title'>Смотрите также</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className='mySwiper'
      >
        {images.map(image => 
          <SwiperSlide>
            <img key={image.id} alt={image.title} src={image.mainImage} />
          </SwiperSlide>
        )}
        
      </Swiper>
    </>
  )
}
