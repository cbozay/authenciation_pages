import { configureStore } from "@reduxjs/toolkit";
import auth from "./AuthSlice";
import productsss from "./ProductSlice";

const store = configureStore({
  reducer: {
    auth,
    productsss,
  },
});

export default store;
