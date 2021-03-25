import React from "react";
import Preloader from "../../common/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;

  return (
    <div>
      <div>
        <img
          className={classes.content__bg}
          src="/images/contentbackground.jpg"
          alt=""
        />
      </div>
      <div>
        <img src={props.profile.photos.large} alt="" />
      </div>
    </div>
  );
};

export default ProfileInfo;
