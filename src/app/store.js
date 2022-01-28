import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/carSlice/CarSlice";

export const store = configureStore({
  reducer: carReducer,
});
