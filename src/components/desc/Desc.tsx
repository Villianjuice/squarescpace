import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { Button, SelectSmall } from "../../composables";
import { useAppDispatch } from "../../redux/hook";
import { addItem } from "../../redux/slices/CartSlice";
import { IItem } from "../../ts/types";

export const Desc: React.FC <IItem> = ({title, code, price, sizes, desc, id, mainImage}) => {
  const [size, setSize] = useState(sizes[0])

  const dispatch = useAppDispatch()

  const addToCart = useCallback(() => {
    const itemCart = {
      id, 
      title,
      size,
      code,
      price,
      count: 0,
      mainImage
    }
    dispatch(addItem(itemCart))
  }, [dispatch, id,  title, code, price, size])
 
  return (
    <div className="desc">
      <h3 className="desc__title">{title}</h3>
      <p className="desc__code">SKU: {code}</p>
      <p className="desc__price">{price} RUB</p>
      <SelectSmall sizes={sizes} size={size} setSize={setSize} />
      <Button  width="250px" onClick={addToCart} title="ADD TO CART" />
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
