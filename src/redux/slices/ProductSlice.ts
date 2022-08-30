import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IItem } from "../../ts/types";
import { isError } from "../hook";

interface ProductState {
  item: IItem | null;
  loading: boolean;
  error: string | null
}

export const fetchProduct = createAsyncThunk<IItem, string, { rejectValue: string }>(
  'product/fetchProduct',
  async function (id, { rejectWithValue }) {
    const response = await fetch(`https://62f21f39b1098f15080bac7e.mockapi.io/items/${id}`)

    if (!response.ok) {
      return rejectWithValue('Server error!')
    }

    return await response.json()
  },
) 

const initialState: ProductState = {
  item: null,
  loading: false,
  error: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    unfetchProduct(state) {
      state.item = null;
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export const {unfetchProduct} = productSlice.actions

export default productSlice.reducer


