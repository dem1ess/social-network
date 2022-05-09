import * as React from "react";
import {Post} from "./posts/Post";
import s from "./MyPosts.module.css";

export const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    };

    let postsElement = props.posts.map((p) => (
        <Post message={p.post} likesCount={p.likesCount}/>
    ));

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
        <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
        />
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postsElement}
        </div>
    );
};
