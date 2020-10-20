import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hi, man", likesCount: 20},
        {id: 2, message: "Privet", likesCount: 30}
    ]
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
        <Post message={postData[0].message} likeCounter={postData[0].likesCount} />
        <Post message={postData[1].message} likeCounter={postData[1].likesCount} />
        <Post />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;
