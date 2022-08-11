import { Line } from "../../composables";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { clearItems } from "../../redux/slices/CartSlice";
import { CartItem } from "../cartItem/CartItem";

export const CartList = () => {
  const items = useAppSelector(state => state.cart.items)
  const totalPrice = useAppSelector(state => state.cart.totalPrice)

  const dispatch = useAppDispatch()

  const onClearItems = () => {
    if (window.confirm('Are you sure you want to remove items?')) {
      dispatch(clearItems())
    }
  }

  return (
    <div className="cartList">
      <div className="cartList__title">Оформление заказа 
        <button onClick={onClearItems} className="cartList__clear">Очистить корзину</button> 
      </div>
      <Line />
      {items.map(item => 
        <CartItem {...item} key={item.id}/>
        )}
      <Line />
      <p className="cartList__total">Subtotal: {totalPrice} RUB</p>
    </div>
  );
};
