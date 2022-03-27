import React from "react";
import {AddPostActionCreator, onPostChangeActionCreator, SinglePostType} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";


type MyPostsContainerPropsType = {
    posts: Array<SinglePostType>
    dispatch: Dispatch
    newPostText: string
}

// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//
//
//     const addPost = () => {
//         props.dispatch(AddPostActionCreator())
//     }
//
//
//     let onPostChange = (text: string) => {
//         props.dispatch(onPostChangeActionCreator(text))
//     }
//
//     return (
//         <MyPosts Posts={props.posts} addPost={addPost} onPostChange={onPostChange} NewPostText={props.newPostText}/>
//     )
// }
//

let mapStateToProps = (state: RootStateType) => {
    return {
        Posts: state.ProfilePage.Posts,
        NewPostText: state.ProfilePage.NewPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(AddPostActionCreator())
        },
        onPostChange: (text: string) => {
            dispatch(onPostChangeActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)