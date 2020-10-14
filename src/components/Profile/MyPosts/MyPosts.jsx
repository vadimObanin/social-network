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
        <Post message="Hi, man" likeCounter="10" />
        <Post message="Privet" likeCounter="40" />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;
