import React from 'react';
import UserPhoto from "../../assets/images/images.png"
import s from "./Users.module.css"
import {UsersType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";
import {samuraiApi} from "../../api/api";

type UsersPropsType = {
    totalUserCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: UsersType
    isFollowingProgress: Array<number>
    onUnFollowClickHandler: (id: number) => void
    onFollowClickHandler: (id: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, id: number) => void

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
                    return <span key={Math.random()} onClick={(e) => props.onPageChanged(el)}
                                 className={props.currentPage === el ? s.selectedPage : ''}>{el}</span>
                })}
            </div>
            {
                props.users.map(el => <div className={s.userContainer} key={el.id}>
                    <div className={s.left}>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small !== null ? el.photos.small : UserPhoto} alt={'ava'}
                                 className={s.avatar}/>
                        </NavLink>
                        {el.followed
                            ? <button onClick={() => {
                                props.toggleIsFollowingProgress(true, el.id)
                                samuraiApi.unFollow(el.id)
                                    .then((data) => {
                                        if (data.resultCode === 0) {
                                            props.onUnFollowClickHandler(el.id)
                                        }
                                        props.toggleIsFollowingProgress(false, el.id)
                                    })
                            }} disabled={props.isFollowingProgress.some(id => id === el.id)}>Unfollow</button>

                            : <button onClick={() => {
                                props.toggleIsFollowingProgress(true, el.id)
                                samuraiApi.follow(el.id)
                                    .then((data) => {
                                        if (data.resultCode === 0) {
                                            props.onFollowClickHandler(el.id)
                                        }
                                        props.toggleIsFollowingProgress(false, el.id)
                                    })
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
