import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://yt3.ggpht.com/a/AATXAJzvllV-xA9r3dw4EvsFiHQGDsjA7SHfRszdC4l_2g=s900-c-k-c0xffffffff-no-rj-mo"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>like {props.likeCounter}</span>
      </div>
    </div>
  );
};

export default Post;
