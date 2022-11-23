import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer.js";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
                dispatch(addPostActionCreator());
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)





