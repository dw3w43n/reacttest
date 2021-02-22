import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Post 1", likesCount: 12 },
        { id: 2, message: "Post 2", likesCount: 11 },
        { id: 3, message: "Post 3", likesCount: 18 },
      ],
      newPostText: "Hello world",
    },

    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state has been changed!");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
