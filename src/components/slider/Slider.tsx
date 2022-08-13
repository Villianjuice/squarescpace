import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper'
import { createSelector } from '@reduxjs/toolkit'
import { Link, useNavigate, useParams } from 'react-router-dom'

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

  const items = useAppSelector(selectImages) 

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
        {items.map((item, i) => 
          <SwiperSlide key={i}>
            {/* <Link to={`/item/${item.id}`} > */}
              <img alt={item.title} src={item.mainImage} />

            {/* </Link> */}
          </SwiperSlide>
        )}
        
      </Swiper>
    </>
  )
}
