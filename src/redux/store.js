import { configureStore } from "@reduxjs/toolkit";
import events from "./slices/eventsSlice";

export const store = configureStore({
  reducer: {
    events,
  },
});
