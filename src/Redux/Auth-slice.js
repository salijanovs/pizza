import { createSlice } from "@reduxjs/toolkit";
import { account } from "../appWrite";
import { Navigate, useNavigate } from "react-router-dom";

const initialState = {
  user: {},
  inSign: false,
  isLoading: false,
  products: [],
  category: "pizza",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startSign: (state) => {
      state.isLoading = true;
    },
    inSignSucces: (state, actions) => {
      state.inSign = true;
      state.isLoading = false;
      state.user = actions.payload;
    },
    inSignFalse: (state) => {
      state.inSign = false;
      state.isLoading = false;
    },

    logout: (state) => {
      state.inSign = false;
      state.user = {};
      localStorage.removeItem("token");
    },

    toCart: (state, actions) => {
      const product = actions.payload;

      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        if (existingProduct.quantity < 10) {
          existingProduct.quantity += 1;
        }
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
    },

    changeCategory: (state, actions) => {
      state.category = actions.payload;
    },

    productRemove: (state, actions) => {
      const productId = actions.payload;

      const productToRemove = state.products.find(
        (item) => item.id === productId
      );

      if (productToRemove) {
        state.products = state.products.filter((item) => item.id !== productId);
      }
    },
    minusProduct: (state, actions) => {
      const productId = actions.payload;

      const productToMinus = state.products.find(
        (item) => item.id === productId
      );

      if (productToMinus && productToMinus.quantity > 1) {
        productToMinus.quantity -= 1;
      }
    },
    plusProduct: (state, actions) => {
      const productId = actions.payload;

      const productToPlus = state.products.find(
        (item) => item.id === productId
      );

      if (productToPlus && productToPlus.quantity < 10) {
        productToPlus.quantity += 1;
      }
    },
    clearProducts: (state) => {
      state.products = [];
    },
  },
});
export const {
  startSign,
  inSignFalse,
  inSignSucces,
  toCart,
  productRemove,
  minusProduct,
  plusProduct,
  logout,
  clearProducts,
  changeCategory,
} = authSlice.actions;
export default authSlice.reducer;
