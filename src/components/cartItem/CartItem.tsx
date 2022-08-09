import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export const CartItem = () => {
  return (
    <div className="cartItem">
      <div className="cartItem__img">
        <img
          src="https://thumb.tildacdn.com/tild6232-3664-4332-b133-363464663638/-/resize/260x/-/format/webp/image.png"
          alt=""
        />
      </div>
      <div className="cartItem__about">
        <Link to="/" className="cartItem__title">
          EARRING SIX FACES SCREW
        </Link>
        <p className="cartItem__size">Количество, шт: 1</p>
        <p className="cartItem__code">GJ-E1PS-2</p>
      </div>
      <div className="cartItem__count">
        <AiOutlineMinusCircle size={18} className="cartItem__svg" />
        <div className="cartItem__count-num">5</div>
        <AiOutlinePlusCircle size={18} className="cartItem__svg" />
      </div>
      <div className="cartItem__price">34 300RUB</div>
      <div>
        <TiDeleteOutline size={23} className="cartItem__svg" />
      </div>
    </div>
  );
};
