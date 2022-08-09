import { CartList, Form } from "../../components";

import "./cart.scss";

const Cart = () => {
  return (
    <section className="cart container-margin">
      <CartList />
      <Form />
    </section>
  );
};

export default Cart;
