const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: "./images/profileimage.jpg",
    //   followed: false,
    //   fullName: "Arnaldo",
    //   status: "programmer",
    //   location: { city: "Violetborough", country: "Monaco" },
    // },
    // {
    //   id: 2,
    //   photoUrl: "./images/profileimage.jpg",
    //   followed: true,
    //   fullName: "Margarita",
    //   status: "accounter",
    //   location: { city: "South Kris", country: "Uruguay" },
    // },
    // {
    //   id: 3,
    //   photoUrl: "./images/profileimage.jpg",
    //   followed: false,
    //   fullName: "Gonzalo",
    //   status: "designer",
    //   location: { city: "Jacobiport", country: "Namibia" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, action.users],
      };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userID: userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });

export default usersReducer;
