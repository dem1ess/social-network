import React from "react";
import {ProfileInfo} from "./profileinfo/ProfileInfo";
import {MyPostsContainer} from "./myposts/MyPostsContainer";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};
