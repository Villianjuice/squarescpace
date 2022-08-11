import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItemCart } from "../../ts/types";

interface CartSliceState {
  totalPrice: number;
  items: IItemCart[]
}

const initialState: CartSliceState = {
  totalPrice: 0,
  items: []
}

const calcTotalPrice = (items: IItemCart[]) => items.reduce((sum, obj) => obj.price * obj.count + sum, 0);

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IItemCart>) {
      // state.items.push(action.payload);
      const findItem = state.items.find(item => item.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }
      state.totalPrice = calcTotalPrice(state.items)
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.totalPrice = calcTotalPrice(state.items)
    },
    incItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(item => item.id === action.payload)
      if (findItem) {
        findItem.count++
      }
      state.totalPrice = calcTotalPrice(state.items)
    },
    decItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(item => item.id === action.payload)
      if (findItem) {
        findItem.count--
      }
      state.totalPrice = calcTotalPrice(state.items)
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0
    }
  }
})

export const {addItem, clearItems, removeItem, decItem, incItem} = CartSlice.actions

export default CartSlice.reducer