import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import Preloader from "../Common/Preloader/Preloader";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    GetUserProfile: (userID: string) => void
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
