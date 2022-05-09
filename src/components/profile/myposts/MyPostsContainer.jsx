import * as React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer.js";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action);

                };
            return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />
            }
        }
        </StoreContext.Consumer>
    )
};


