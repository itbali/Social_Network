import React from "react";
import {AddPostActionCreator, onPostChangeActionCreator, SinglePostType} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";


type MyPostsContainerPropsType = {
    posts: Array<SinglePostType>
    dispatch: Dispatch
    newPostText: string
}


export const MyPostsContainer = (props: MyPostsContainerPropsType) => {


    const addPost = () => {
        props.dispatch(AddPostActionCreator())
    }


    let onPostChange = (text: string) => {
        props.dispatch(onPostChangeActionCreator(text))
    }

    return (
        <MyPosts Posts={props.posts} addPost={addPost} onPostChange={onPostChange} NewPostText={props.newPostText}/>
    )
}