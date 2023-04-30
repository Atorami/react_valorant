import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    getEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const { getEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
