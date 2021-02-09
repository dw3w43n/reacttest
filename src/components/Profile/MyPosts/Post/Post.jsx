import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="./images/profileimage.jpg" alt="" />
      <span>{props.message}</span>
      <p>Likes {props.likeCount}</p>
    </div>
  );
};

export default Post;
