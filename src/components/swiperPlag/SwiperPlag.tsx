
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import './swiper.scss'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import './swp.scss'

export function SwiperPlag() {
  const [thumbsSwiper, setThumbsSwiper] =  useState(null);

  // return (
  //   <>
  //     <Swiper
  //       spaceBetween={10}
  //       navigation={true}
  //       thumbs={{ swiper: thumbsSwiper }}
  //       modules={[FreeMode, Navigation, Thumbs]}
  //       className="mySwiper2"
  //     >
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
  //       </SwiperSlide>
  //     </Swiper>
  //     <Swiper
  //       // onSwiper={setThumbsSwiper}
  //       spaceBetween={10}
  //       slidesPerView={4}
  //       freeMode={true}
  //       watchSlidesProgress={true}
  //       modules={[FreeMode, Navigation, Thumbs]}
  //       className="mySwiper"
  //     >
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
  //       </SwiperSlide>
  //       <SwiperSlide>
  //         <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
  //       </SwiperSlide>
  //     </Swiper>
  //   </>
  // );

  return (
    <div className="swiper__block">
      <Swiper
        style={{width: '80%'}}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        style={{width: '100%', display: 'flex', flexDirection: 'column'}}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );

}
