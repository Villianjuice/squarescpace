import { CartList } from "../../components/cartList/CartList"
import { Form } from "../../components/form/Form"

import './cart.scss'

const Cart = () => {
  return (
    <section className="cart container-margin">
      <CartList />
      <Form />
    </section>
  )
}

export default Cart