import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.nav} ${classes.active}`}>
        <a href="/profile">Profile</a>
      </div>
      <div>
        <a href="/dialogs">Messages</a>
      </div>
      <div>
        <a href="/news">News</a>
      </div>
      <div>
        <a href="/music">Music</a>
      </div>
      <div>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
