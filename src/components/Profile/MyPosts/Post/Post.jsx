import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="./images/profileimage.jpg" alt="" />
      <span>{props.message}</span>
      &nbsp;&nbsp;
      <span>Likes {props.likeCount}</span>
    </div>
  );
};

export default Post;
