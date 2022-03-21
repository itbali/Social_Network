import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import React, {ChangeEvent} from "react";
import {SinglePostType} from "../../../redux/ProfileReducer";

type MyPostsPropsType = {
    Posts: Array<SinglePostType>
    addPost: () => void
    onPostChange: (t: string) => void
    NewPostText: string
}


export const MyPosts = (props: MyPostsPropsType) => {


    const onAddPost = () => {
        props.addPost();
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
        props.onPostChange(e.currentTarget.value)
    }

    return (
        <div>
            My Posts
            <div className={s.postBlock}>
                <div>
                    <textarea onChange={onPostChange} value={props.NewPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post
                    </button>
                </div>
            </div>
            <div className={s.Posts}>Posts
                {PostsArray}
            </div>
        </div>
    )
}