import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.nav} ${classes.active}`}>
        <a href="#s">Profile</a>
      </div>
      <div>
        <a href="#s">Messages</a>
      </div>
      <div>
        <a href="#s">News</a>
      </div>
      <div>
        <a href="#s">Music</a>
      </div>
      <div>
        <a href="#s">Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
