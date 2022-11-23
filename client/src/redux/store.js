import { configureStore } from "@reduxjs/toolkit";
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
