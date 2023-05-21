import { configureStore } from "@reduxjs/toolkit";

import postData from './slices/postCreationSlice';
import profileVisibility from './slices/profileVisibilitySlice';

const store = configureStore({
  reducer: { postData, profileVisibility },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
