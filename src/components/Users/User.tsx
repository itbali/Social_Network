import React from 'react';
import s from "./Users.module.css"
import {NavLink} from "react-router-dom";
import UserPhoto from "../../assets/images/images.png"

type userPropsType = {
  id: number
  name: string
  status: string
  smallPhoto: string
  followed: boolean
  unfollow: (id: number) => void
  follow: (id: number) => void
  isFollowingProgress: Array<number>
}

export const User = (props: userPropsType) => {
  return (
    <div className={s.userContainer} key={props.id}>
      <div className={s.left}>
        <NavLink to={'/profile/' + props.id}>
          <img src={props.smallPhoto !== null ? props.smallPhoto : UserPhoto} alt={'ava'}
               className={s.avatar}/>
        </NavLink>
        {props.followed

          //checking if user is followed then showing button unfollow

          ? <button onClick={() => {
            props.unfollow(props.id)
          }} disabled={props.isFollowingProgress.some(id => id === props.id)}>Unfollow</button>

          : <button onClick={() => {
            props.follow(props.id)
          }} disabled={props.isFollowingProgress.some(id => id === props.id)}>Follow</button>
        }

      </div>
      <div>
        <div>
          <div>{props.name}</div>
          <div>{props.status}</div>
        </div>
        <div>
          <div>{props.status}</div>
        </div>
      </div>
    </div>
  );
};
