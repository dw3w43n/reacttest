import { rerenderEntireTree } from "../rander";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Post 1", likesCount: 12 },
      { id: 2, message: "Post 2", likesCount: 11 },
      { id: 3, message: "Post 3", likesCount: 18 },
      { id: 4, message: "Post 4", likesCount: 33 },
      { id: 5, message: "Post 5", likesCount: 51 },
      { id: 6, message: "Post 6", likesCount: 154 },
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
