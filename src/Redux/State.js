const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
    },
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default store;

window.store = store;
