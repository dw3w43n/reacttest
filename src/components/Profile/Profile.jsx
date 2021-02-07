import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <div>
        <img
          className={classes.content__bg}
          src="./images/contentbackground.jpg"
          alt=""
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
