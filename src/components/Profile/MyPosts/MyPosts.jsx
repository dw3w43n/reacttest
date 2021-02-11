import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Post 1", likesCount: 12 },
    { id: 2, message: "Post 2", likesCount: 11 },
    { id: 3, message: "Post 3", likesCount: 18 },
    { id: 4, message: "Post 4", likesCount: 33 },
    { id: 5, message: "Post 5", likesCount: 51 },
    { id: 6, message: "Post 6", likesCount: 154 },
  ];
  let postsElements = postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="2"></textarea>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
