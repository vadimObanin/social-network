import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + " " + classes.active}>Lotrik</div>
        <div className={classes.dialog}>Petya</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>dfd</div>
        <div className={classes.message}>dfdfdd</div>
      </div>
    </div>
  );
};
export default Dialogs;
