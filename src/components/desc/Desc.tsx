import { Link } from "react-router-dom";

import { Btn, SelectSmall } from "../../composables";
import { IItem } from "../../ts/types";

export const Desc: React.FC <IItem> = ({title, code, price, desc, size}) => {
  return (
    <div className="desc">
      <h3 className="desc__title">{title}</h3>
      <p className="desc__code">SKU: {code}</p>
      <p className="desc__price">{price} RUB</p>
      <SelectSmall items={size} />
      <Btn width="250px" onClick={() => {}} title="ADD TO CART" />
      <p className="desc__desc">Описание товара</p>
      {desc.map((text, i) => 
        <p key={i} className="desc__text">
          {text}
        </p>
      )}
      
      <p className="desc__text">
        Для доставки по миру —
        <Link
          to={{
            pathname: "//t.me/villianjuice",
          }}
          target="_blank"
          style={{ color: "rgb(138, 215, 230)" }}
        >
          Оформить заказ
        </Link>
      </p>
    </div>
  );
};
