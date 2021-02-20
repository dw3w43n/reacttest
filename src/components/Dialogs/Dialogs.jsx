import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../Redux/State";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => {
    return <DialogItem name={d.name} id={d.id} />;
  });

  let messagesElements = state.messages.map((m) => {
    return <Message message={m.message} />;
  });

  let newMessageBody = state.newMessageBody;

  let newMessageElement = React.createRef();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
    // let text = newMessageElement.current.value;
    // alert(text);
  };
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

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
