import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={classes.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Petya" id="1" />
        <DialogItem name="Ilya" id="2" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi man" />
        <Message message="How are you" />
      </div>
    </div>
  );
};
export default Dialogs;
