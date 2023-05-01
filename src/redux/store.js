import { configureStore } from "@reduxjs/toolkit";
import events from "./slices/eventsSlice";
import tests from "./slices/testSlice";

export const store = configureStore({
  reducer: {
    events,
    tests,
  },
});
