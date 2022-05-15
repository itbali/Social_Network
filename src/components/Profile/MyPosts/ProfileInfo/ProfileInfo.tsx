import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../../redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}


const ProfileInfo = (props: ProfileInfoType) => {
    return (
        <div>
            <div>
                {/*<img style={{width: '900px', height: '300px', objectFit: 'cover'}}*/}
                {/*     src="https://letstrvl.com/posts/x1600/%D0%9F%D0%BB%D1%8F%D0%B6_%D0%91%D0%B0%D0%BB%D0%B8%D0%B0%D0%BD_%D1%81_%D0%B2%D1%83%D0%BB%D0%BA%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%BC_%D0%BF%D0%B5%D1%81%D0%BA%D0%BE%D0%BC_%D0%BD%D0%B0_%D0%91%D0%B0%D0%BB%D0%B8-4yQjT.jpg"*/}
                {/*     alt=""/>*/}
            </div>
            <div className={s.discriptionBlock}>
                <img
                    src={props.profile.photos.large}
                    alt=""/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;
