import { configureStore } from "@reduxjs/toolkit";

// Configure Store Here
const store = configureStore({
  reducer: {},
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
