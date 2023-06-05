import { configureStore } from "@reduxjs/toolkit";

import applicationData from "./slices/applicationCreationSlice";
import profileVisibility from "./slices/profileVisibilitySlice";
import { ApplicationApi } from "./api/ApplicationApi";

const store = configureStore({
  reducer: {
    applicationData,
    profileVisibility,
    [ApplicationApi.reducerPath]: ApplicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApplicationApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
