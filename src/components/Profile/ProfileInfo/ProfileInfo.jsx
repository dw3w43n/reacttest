import React from "react";
import Preloader from "../../common/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

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
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
