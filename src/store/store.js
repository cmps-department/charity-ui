import { configureStore } from "@reduxjs/toolkit";

import postData from './slices/creationPostDataSlice';

const store = configureStore({
  reducer: { postData },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
