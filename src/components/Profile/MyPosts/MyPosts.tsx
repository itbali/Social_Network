import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import React from "react";
import {SinglePostType} from "../../../redux/profileReducer";
import {SendTextForm} from "./SendTextForm";

type MyPostsPropsType = {
  posts: Array<SinglePostType>
  addPost: (post: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {


  const onAddPost = (post: string) => {
    props.addPost(post);
  }

  const PostsArray = props.posts.map(p => {
    return (
      <Post
        key={p.id}
        message={p.postMessage}
        img={p.img}
        likeCount={p.likeCount}
      />
    )
  })

  return (
    <div>
      Мои посты
      <SendTextForm onSubmitButtonClick={onAddPost} submitButtonName={"Опубликовать"}
                    type={"textarea"}/>
      <div className={s.Posts}>Posts
        {PostsArray}
      </div>
    </div>
  )
}
