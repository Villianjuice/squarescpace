import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IItem } from '../../ts/types'

interface IItemsState {
  items: IItem[]
  loading: boolean
  error: null | string
}

const initialState: IItemsState = {
  items: [],
  error: null,
  loading: false,
}

export const fetchItems = createAsyncThunk<IItem[], void, { rejectValue: string }>(
  'items/fetchItems',
  async function (_, { rejectWithValue }) {
    const response = await fetch('https://62f21f39b1098f15080bac7e.mockapi.io/items')

    if (!response.ok) {
      return rejectWithValue('Server error!')
    }

    return await response.json()
  },
)

const ItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.error = null
        state.loading = true
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.loading = false
      })
  },
})

export default ItemsSlice.reducer

function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}
