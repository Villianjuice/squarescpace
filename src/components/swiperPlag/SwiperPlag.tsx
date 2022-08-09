import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import type { Swiper as SwiperType } from "swiper";

import "./swiper.scss";
import { IItemImages } from "../../ts/types";

export const SwiperPlag: React.FC<IItemImages> = ({images}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="swiper__block">
      <Swiper
        style={{ width: "80%" }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((img, i) => 
          <SwiperSlide key={i}>
            <img src={img} alt="img"/>
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
        spaceBetween={10}
        slidesPerView={images?.length}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images?.map((img, i) => 
          <SwiperSlide key={i}>
            <img src={img} alt="img"/>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
