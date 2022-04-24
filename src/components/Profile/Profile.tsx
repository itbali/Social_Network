import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import Preloader from "../Common/Preloader/Preloader";
import {ProfileType} from "../../redux/ProfileReducer";

type ProfilePropsType = {
    SetUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

export const Profile = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
