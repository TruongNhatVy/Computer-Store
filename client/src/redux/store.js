import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/AuthReducer";

import cartReducer, { getTotals } from "./reducer/cartslice";
import productModalReducer from "./reducer/productModalSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    productModal: productModalReducer,
  },
});

store.dispatch(getTotals());
export default store;
