import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/AuthReducer";

import cartReducer, { getTotals } from "./reducer/cartslice";

const store = configureStore({
  reducer: { authReducer, cart: cartReducer }
  });

store.dispatch(getTotals());
export default store;
