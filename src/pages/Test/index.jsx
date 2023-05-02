import { useDispatch, useSelector } from "react-redux";
import { getPosts, addPost, deletePost } from "../../redux/slices/testSlice";

import styles from "./Test.module.scss";
import { useState } from "react";
import axios from "axios";

const Test = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.tests.posts);

  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postId, setPostId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      postId: postId,
      postTitle: postTitle,
      postText: postText,
    };

    dispatch(addPost(newPost));

    setPostId(postId + 1);
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
          <textarea
            type="text"
            id="postText"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>

        <button type="submit">POST</button>
      </form>

      <div className={styles.posts}>
        <ul>
          {posts.lenght !== 0 ? (
            posts.map((val) => (
              <li>
                <span>{val.postId}</span>
                <h2>{val.postTitle}</h2>
                <p>{val.postText}</p>
                <button onClick={() => dispatch(deletePost(val.postId))}>
                  X
                </button>
              </li>
            ))
          ) : (
            <li>Posts not found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Test;
