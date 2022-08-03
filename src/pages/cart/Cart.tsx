import { CartList } from "../../components/cartList/CartList"
import { Order } from "../../components/order/Order"

import './cart.scss'

const Cart = () => {
  return (
    <section className="cart container">
      <CartList />
      <Order />
    </section>
  )
}

export default Cart