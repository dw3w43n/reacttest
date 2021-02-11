import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Clifford" },
    { id: 2, name: "Aletha" },
    { id: 3, name: "Eveline" },
    { id: 4, name: "Olin" },
    { id: 5, name: "Tania" },
  ];

  let dialogsElements = dialogsData.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesData = [
    { id: 1, message: "Corrupti sequi est omnis." },
    { id: 2, message: "Earum eos tempora modi unde quod vel iusto." },
    { id: 3, message: "Ex asperiores voluptatem ut aut sit maxime." },
  ];

  let messagesElements = messagesData.map((m) => {
    return <Message message={m.message} />;
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
