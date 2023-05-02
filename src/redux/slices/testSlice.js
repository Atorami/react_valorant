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
    deletePost: (state, action) => {
      // state.posts.filter((post) => post.postId !== action.payload);
      state.posts.splice(
        state.posts.findIndex((val) => val.postId === action.payload),
        1
      );
    },
  },
});

export const { getPosts, addPost, deletePost } = testSlice.actions;
export default testSlice.reducer;
