import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    // {
    //   postTitle: "Some Post title",
    //   postText:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    // },
  ],
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
