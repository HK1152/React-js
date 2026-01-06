import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/product/productslics";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
