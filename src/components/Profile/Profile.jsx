import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={classes.head}>
        <img
          src="https://sun9-63.userapi.com/c837725/v837725884/3018c/AifvM9SRbxE.jpg"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
