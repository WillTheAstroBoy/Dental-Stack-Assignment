import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    updateProducts: (state, action) => {
      const products = [...state, action.payload];
      return products;
    },
    addProducts: (state, action) => {
      const products = [...action.payload];
      return products;
    },
    deleteProduct: (state, action) => {
      const products = [...state.filter((item) => item.id !== action.payload)];
      return products;
    },
    editProduct: (state, action) => {
      const products = [
        ...state.map((item) => {
          if (item.id == action.payload.id) {
            return action.payload;
          }
          return item;
        })
      ];
      return products;
    }
  }
});

export const {
  updateProducts,
  addProducts,
  deleteProduct,
  editProduct
} = productsSlice.actions;

export default productsSlice.reducer;
