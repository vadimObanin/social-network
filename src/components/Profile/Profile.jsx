import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://img2.fonwall.ru/o/er/monitor-montagne-mountain-multi.jpeg?route=low&h=200"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
