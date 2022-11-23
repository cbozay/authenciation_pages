import { configureStore } from "@reduxjs/toolkit";
import auth from "./AuthSlice";
import products from "./ProductSlice";

const store = configureStore({
  reducer: {
    auth,
    products,
  },
});

export default store;
