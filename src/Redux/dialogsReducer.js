const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Clifford" },
    { id: 2, name: "Aletha" },
    { id: 3, name: "Eveline" },
    { id: 4, name: "Olin" },
    { id: 5, name: "Tania" },
  ],
  messages: [
    { id: 1, message: "Corrupti sequi est omnis." },
    { id: 2, message: "Earum eos tempora modi unde quod vel iusto." },
    { id: 3, message: "Ex asperiores voluptatem ut aut sit maxime." },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
