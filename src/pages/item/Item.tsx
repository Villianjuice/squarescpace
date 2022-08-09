import { Link } from "react-router-dom";
import "swiper/css/bundle";

import { ItemProduct, Slider } from "../../components";

import "./item.scss";

const Item = () => {
  return (
    <section className="item container-margin">
      <Link to="/" className="item__link">
        {" "}
        ← More products
      </Link>
      <ItemProduct />
      <Slider />
    </section>
  );
};

export default Item;
