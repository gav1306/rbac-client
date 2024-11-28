import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api/api-slice";
import authReducer from "../features/auth/slice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
  devTools: import.meta.env.VITE_ENV === "development" ? true : false,
});

export default store;
