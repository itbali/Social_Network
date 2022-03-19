import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {actionType, AddPostActionCreator, onPostChangeActionCreator, singlePostType} from "../../../redux/state";
import React, {ChangeEvent} from "react";


type MyPostsPropsType = {
    Posts: singlePostType[]
    dispatch: (action: actionType) => void
    NewPostText: string
}


export const MyPosts = (props: MyPostsPropsType) => {


    const addPost = () => {
        props.dispatch(AddPostActionCreator())
    }

    const PostsArray = props.Posts.map(p => {
        return (
            <Post
                message={p.postMessage}
                img={p.img}
                likeCount={p.likeCount}
            />
        )
    })

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onPostChangeActionCreator(e))
    }

    return (
        <div>
            My Posts
            <div className={s.postBlock}>
                <div>
                    <textarea onChange={onPostChange} value={props.NewPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post
                    </button>
                </div>
            </div>
            <div className={s.Posts}>Posts
                {PostsArray}
            </div>
        </div>
    )
}