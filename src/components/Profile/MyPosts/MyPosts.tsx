import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea> </textarea>
                <button>Add Post</button>
            </div>
            <div className={s.Posts}>Posts
                <Post
                    message={'Hi! How are you?'}
                    img={'https://image.shutterstock.com/image-vector/new-post-neon-text-video-600w-1444569020.jpg'}
                    likeCount={3}
                />
                <Post
                    message={'Anybody here?'}
                    img={''}
                    likeCount={2}
                />
            </div>
        </div>
    )
}