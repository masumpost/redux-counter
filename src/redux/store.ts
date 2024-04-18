import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import logger from "./middleware/logger";
// import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  //   devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
