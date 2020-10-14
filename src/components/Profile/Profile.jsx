import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://img2.fonwall.ru/o/er/monitor-montagne-mountain-multi.jpeg?route=low&h=200"
          alt=""
        />
      </div>
      <div>ava + discription</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
