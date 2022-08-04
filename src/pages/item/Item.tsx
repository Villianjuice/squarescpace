import { Link } from "react-router-dom"
import { Desc } from "../../components/desc/Desc"
import { SwiperPlag } from "../../components/swiper/SwiperPlag"

// eslint-disable-next-line
import "swiper/css/bundle";
import "./item.scss";

const Item = () => {
  return (
    <section className="item container-margin">
      <Link to='/' className="item__link"> ← More products</Link>
      <div className="item__product">
        <SwiperPlag />
        <Desc />
      </div>
    </section>
  )
}

export default Item