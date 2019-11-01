import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="I am first post" likesCount="5" />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post message="Hi" likesCount="13" />
      </div>
    </div>
  );
};

export default MyPosts;
