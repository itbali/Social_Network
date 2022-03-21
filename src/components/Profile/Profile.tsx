import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../redux/ProfileReducer";
import {Dispatch} from "redux";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: Dispatch
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                posts={props.profilePage.Posts}
                dispatch={props.dispatch}
                newPostText={props.profilePage.NewPostText}
            />
        </div>
    )
}