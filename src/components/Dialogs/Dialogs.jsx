import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

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

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>

        <div></div>
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
