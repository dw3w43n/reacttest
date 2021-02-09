import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="2"></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <Post message="Post 1" likeCount="18" />
        <Post message="Post 2" likeCount="33" />
        <Post message="Post 3" likeCount="51" />
        <Post message="Post 4" likeCount="154" />
        <Post message="Post 5" likeCount="11" />
      </div>
    </div>
  );
};

export default MyPosts;
