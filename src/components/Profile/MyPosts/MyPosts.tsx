import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {actionType, singlePostType} from "../../../redux/state";
import React, {ChangeEvent} from "react";


type MyPostsPropsType = {
    Posts: singlePostType[]
    dispatch: (action: actionType) => void
    NewPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    // let newPostRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        // if (!!newPostRef.current?.value) {
        //     let postText = newPostRef.current.value
        //     postText &&
        // props.addPost()
        // }
        props.dispatch({type: 'ADD-POST'})
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
        props.dispatch({type: "UPDATE-CHANGE-TEXT", newText: (e.currentTarget.value)})
        // props.updateChangeText(e.currentTarget.value)
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
                {/*<Post*/}
                {/*    message={props.Posts[1].postMessage}*/}
                {/*    img={props.Posts[1].img}*/}
                {/*    likeCount={props.Posts[1].likeCount}*/}
                {/*/>*/}
            </div>
        </div>
    )
}