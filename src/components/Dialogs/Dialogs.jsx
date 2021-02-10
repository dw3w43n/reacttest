import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <div className={classes.dialog}>Clifford</div>
        <div className={classes.dialog}>Aletha</div>
        <div className={classes.dialog}>Eveline</div>
        <div className={classes.dialog}>Olin</div>
        <div className={classes.dialog}>Tania</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Corrupti sequi est omnis.</div>
        <div className={classes.message}>
          Earum eos tempora modi unde quod vel iusto.
        </div>
        <div className={classes.message}>
          Ex asperiores voluptatem ut aut sit quaerat facilis maxime.
        </div>
        <div className={classes.message}>
          Maxime odio et voluptatem laboriosam quae.
        </div>
        <div className={classes.message}>
          Odit qui corporis omnis sunt vel alias sed.
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
