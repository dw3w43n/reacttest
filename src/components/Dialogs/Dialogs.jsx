import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} key={d.id} id={d.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message message={m.message} key={m.id} />;
  });

  let newMessageBody = state.newMessageBody;

  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              ref={newMessageElement}
              placeholder="Enter a message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Add message</button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Dialogs;
