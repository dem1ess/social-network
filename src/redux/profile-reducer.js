const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {
            id: 1,
            post: "ezzz",
            likesCount: 4,
        },
        {
            id: 2,
            post: "Hello, bitch!!",
            likesCount: 44,
        },
        {
            id: 3,
            post: "Bitch",
            likesCount: 55,
        },
        {
            id: 4,
            post: "I`m look this site",
            likesCount: 53,
        },
        {
            id: 5,
            post: "I`m coding new social notwork",
            likesCount: 34,
        },
        {
            id: 6,
            post: "It`s my first post",
            likesCount: 13,
        },
    ],
    newPostText: "",
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                post: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = {
                ...state,
            }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;
