import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "Hi, man", likesCount: 20},
        {id: 2, message: "Privet", likesCount: 30}
    ]
    let postsElements = posts.map((p) => {
        return (
            <Post message={p.message} likeCounter={p.likesCount} />
        )
    })
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
          {postsElements}
      </div>
    </div>
  );
};
export default MyPosts;
