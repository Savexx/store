import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        item =>
          item.id === action.payload.id && item.size === action.payload.size
      )
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1
        return
      }

      action.payload.quantity = 1
      state.items = [...state.items, action.payload]
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        item =>
          item.id === action.payload.id && item.size === action.payload.size
      )

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
        return
      }

      state.items = state.items.filter(item => {
        return !(
          item.id === action.payload.id && item.size === action.payload.size
        )
      })
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
