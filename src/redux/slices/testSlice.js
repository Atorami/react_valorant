import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const { getPosts, addPost } = testSlice.actions;
export default testSlice.reducer;
