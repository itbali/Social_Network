import React from 'react';
import UserPhoto from "../../assets/images/images.png"
import s from "./Users.module.css"
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: UsersType
    isFollowingProgress: Array<number>
    unfollow: (id: number) => void
    follow: (id: number) => void

}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (

        <div>

            <div>
                {pages.map(el => {

                    //counting pages of total users

                    return <span key={Math.random()} onClick={(e) => props.onPageChanged(el)}
                                 className={props.currentPage === el ? s.selectedPage : ''}>{el}</span>
                })}
            </div>
            {

                //showing users

                props.users.map(el => <div className={s.userContainer} key={el.id}>
                    <div className={s.left}>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small !== null ? el.photos.small : UserPhoto} alt={'ava'}
                                 className={s.avatar}/>
                        </NavLink>
                        {el.followed

                            //checking if user is followed then showing button unfollow

                            ? <button onClick={() => {
                                props.unfollow(el.id)
                            }} disabled={props.isFollowingProgress.some(id => id === el.id)}>Unfollow</button>

                            : <button onClick={() => {
                                props.follow(el.id)
                            }} disabled={props.isFollowingProgress.some(id => id === el.id)}>Follow</button>
                        }

                    </div>
                    <div>
                        <div>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </div>
                        <div>
                            <div>{el.status}</div>
                        </div>
                    </div>
                </div>)
            }
            <button onClick={() => {
            }}>Show More
            </button>
        </div>
    )

};
