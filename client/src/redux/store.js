import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./reducer/cartslice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.dispatch(getTotals());
export default store;
