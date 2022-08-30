import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlice'
import ItemsSlice from './slices/ItemsSlice'
import ProductSlice from './slices/ProductSlice'

const store = configureStore({
  reducer: {
    items: ItemsSlice,
    cart: CartSlice,
    product: ProductSlice
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
