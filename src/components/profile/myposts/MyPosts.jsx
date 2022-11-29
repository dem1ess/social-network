import React from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css";

export const MyPosts = (props) => {
    let state = props.profilePage
    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    let postsElement = state.posts.map((p) => (
        <Post message={p.post} likesCount={p.likesCount}/>
    ));

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
        <textarea
            ref={newPostElement}
            value={state.newPostText}
            onChange={onPostChange}
        />
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postsElement}
        </div>
    );
};
