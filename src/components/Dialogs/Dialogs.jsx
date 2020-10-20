import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

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
    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrei"}
    ]

    let messages = [
        {id: 1, message: "hi"},
        {id: 2, message: "Yo"}
    ]

    let dialogElements = dialogs.map((d) => {
        return (<DialogItem name={d.name} id={d.id}/>)
    })

    let messagesElements = messages.map((message) => {
        return (<Message message={message.message}/>)
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
export default Dialogs;
