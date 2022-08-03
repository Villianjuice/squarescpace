import { Line } from "../../composables/Line"
import { CartItem } from "../cartItem/CartItem"

// import './cartList.scss'

export const CartList = () => {
  return (
    <div className="cartList">
      <h2 className="cartList__title">Оформление заказа </h2>
      <Line />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <Line />
      <p className="cartList__total">Subtotal: 45 100RUB</p>
    </div>
  )
}
