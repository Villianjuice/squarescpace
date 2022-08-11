import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../ts/types";

interface IItemsState {
  items: IItem[]
}

const initialState: IItemsState= {
  items: []
}

const ItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // addItems 
  }
})

export default ItemsSlice.reducer