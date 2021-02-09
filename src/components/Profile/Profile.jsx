import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={classes.content__bg}
          src="./images/contentbackground.jpg"
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
