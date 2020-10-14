import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>
      <div>
        <textarea></textarea>
        <button>Отправить</button>
      </div>
      <div className={classes.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;
