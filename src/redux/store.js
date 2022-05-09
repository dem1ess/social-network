// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
// export let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         {
//           id: 1,
//           post: "ezzz",
//           likesCount: 4,
//         },
//         {
//           id: 2,
//           post: "Hello, bitch!!",
//           likesCount: 44,
//         },
//         {
//           id: 3,
//           post: "Bitch",
//           likesCount: 55,
//         },
//         {
//           id: 4,
//           post: "I`m look this site",
//           likesCount: 53,
//         },
//         {
//           id: 5,
//           post: "I`m coding new social notwork",
//           likesCount: 34,
//         },
//         {
//           id: 6,
//           post: "It`s my first post",
//           likesCount: 13,
//         },
//       ],
//       newPostText: "",
//     },
//     dialogsPage: {
//       dialogs: [
//         {
//           id: 1,
//           name: "Dasha",
//         },
//         {
//           id: 2,
//           name: "Kirill",
//         },
//         {
//           id: 3,
//           name: "Max",
//         },
//         {
//           id: 4,
//           name: "Nikita",
//         },
//         {
//           id: 5,
//           name: "Mother",
//         },
//         {
//           id: 6,
//           name: "Egor",
//         },
//       ],
//       messages: [
//         {
//           id: 1,
//           message: "Hi",
//         },
//         {
//           id: 2,
//           message: "Hello, bitch!!",
//         },
//         {
//           id: 3,
//           message: "How are you??",
//         },
//         {
//           id: 4,
//           message: "I`m fine and you??",
//         },
//         {
//           id: 5,
//           message: "I`m coding new social notwork",
//         },
//         {
//           id: 6,
//           message: "That`s cool!!!!",
//         },
//       ],
//       newMessageBody: "",
//     },
//     sidebar: {},
//   },

//   getState() {
//     return this._state;
//   },
//   _callSubscriber() {
//     console.log("States was changed!!!!!!");
//   },

//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//     this._callSubscriber(this._state);
//   },
// };
