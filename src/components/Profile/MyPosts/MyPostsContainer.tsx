import React from "react";
import {addPost} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";


let mapStateToProps = (state: RootStateType) => {
    return {
        Posts: state.ProfilePage.Posts
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (post: string) => {
            dispatch(addPost(post))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
