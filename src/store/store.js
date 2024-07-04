import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import purchasesSlices from "./slices/purchasesSlices";
const store = configureStore({
  reducer: {
    products,
    cartSlice,
    purchasesSlices,
  },
});

export default store;
