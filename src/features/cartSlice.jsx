import { createSlice } from "@reduxjs/toolkit";
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: savedCart,
  },

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const exists = state.items.find(
        (item) => item.id === product.id
      );

      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      // LocalStorage Update
      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    clearCart: (state) => {
      state.items = [];

      localStorage.setItem("cart", JSON.stringify([]));
    },
   decreaseQuantity: (state, action) => {
  const item = state.items.find((p) => p.id === action.payload);

  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      state.items = state.items.filter(
        (p) => p.id !== action.payload
      );
    }
  }

  localStorage.setItem("cart", JSON.stringify(state.items));
},
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;