import { Link } from "react-router-dom"
import "swiper/css/bundle";

import { Desc, Slider, SwiperPlag } from "../../components";

import "./item.scss";

const Item = () => {
  return (
    <section className="item container-margin">
      <Link to='/' className="item__link"> ← More products</Link>
      <div className="item__product">
        <SwiperPlag />
        <Desc />
      </div>
      <Slider />
    </section>
  )
}

export default Item