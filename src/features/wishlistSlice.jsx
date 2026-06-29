// import { createSlice } from "@reduxjs/toolkit";

// const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addToWishlist: (state, action) => {
//       const exists = state.items.find(
//         (item) => item.id === action.payload.id
//       );

//       if (!exists) {
//         state.items.push(action.payload);
//       }
//     },
//   },
// });

// export const { addToWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

// LocalStorage se data lo
const savedWishlist =
  JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: savedWishlist,
  },

  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);

        // LocalStorage update
        localStorage.setItem(
          "wishlist",
          JSON.stringify(state.items)
        );
      }
    },

    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.items)
      );
    },

    clearWishlist: (state) => {
      state.items = [];

      localStorage.setItem("wishlist", JSON.stringify([]));
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;