import React from "react";
import classes from "./Profile.module.css";

const Content = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://img2.fonwall.ru/o/er/monitor-montagne-mountain-multi.jpeg?route=low&h=200"
          alt=""
        />
      </div>
      <div>ava + discription</div>
      <div>My posts</div>
      <div>New posts</div>
      <div className="posts">
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 2</div>
      </div>
    </div>
  );
};
export default Content;
