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
  const nav = useNavigate()

  const selectImages = createSelector(
    (state: RootState) => state.items,
    ({items}) => items.filter(item => item.id !== id).sort((a, b) => b.price - a.price)
  )

  const items = useAppSelector(selectImages)

  const handleLink = (id: string) => {
    nav(`/item/${id}`);
    window.scroll(0, 0);
  }
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }

  return (
    <>
      <h3 className='slider__title'>Смотрите также</h3>
      <Swiper
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className='mySwiper'
        breakpoints={breakpoints}
      >
        {items.map((item, i) => 
          <SwiperSlide key={i}>
            <button onClick={() => handleLink(item.id)} >
              <img alt={item.title} src={item.mainImage} />

            </button>
          </SwiperSlide>
        )}
        
      </Swiper>
    </>
  )
}
