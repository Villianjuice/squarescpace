import { Link } from "react-router-dom"
import { Desc } from "../../components/desc/Desc"
import { SwiperPlag } from "../../components/swiperPlag/SwiperPlag"

// eslint-disable-next-line
import "swiper/css/bundle";
import "./item.scss";
import { Slider } from "../../components/slider/Slider";

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