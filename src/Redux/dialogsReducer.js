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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
