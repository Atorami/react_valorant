import { useDispatch, useSelector } from "react-redux";
import { getPosts, addPost } from "../../redux/slices/testSlice";

import styles from "./Test.module.scss";
import { useState } from "react";

const Test = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.tests.posts);

  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      postTitle: postTitle,
      postText: postText,
    };

    dispatch(addPost(newPost));

    setPostTitle("");
    setPostText("");
  };
  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="postText">Post Text</label>
          <input
            type="text"
            id="postText"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>

        <button type="submit">POST</button>
      </form>

      <div className="test-list">
        <ul>
          {posts.lenght !== 0 ? (
            posts.map((val) => <li>{val.postTitle}</li>)
          ) : (
            <li>Posts not found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Test;