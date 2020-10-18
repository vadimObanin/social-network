import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.head}>
        <img
          src="https://sun9-63.userapi.com/c837725/v837725884/3018c/AifvM9SRbxE.jpg"
          alt=""
        />
      </div>
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  );
};
export default ProfileInfo;
