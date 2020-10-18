import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Отправить</button>
        </div>
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
