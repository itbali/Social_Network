import s from './Profile.module.css'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {actionType, singlePostType} from "../../redux/store";


type ProfilePropsType = {
    ProfilePage: {
        Posts: singlePostType[];
        NewPostText: string
    }
    dispatch: (action: actionType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                Posts={props.ProfilePage.Posts}
                dispatch={props.dispatch}
                NewPostText={props.ProfilePage.NewPostText}
            />
        </div>
    )
}