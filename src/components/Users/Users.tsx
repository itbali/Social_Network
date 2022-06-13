import React from 'react';
import {UsersType} from "../../redux/usersReducer";
import {Paginator} from "../Common/Paginator/Paginator";
import {User} from "./User";

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

  return (

    <div>
      <Paginator
        totalItemsCount={props.totalUserCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}/>
      {
        props.users.map(el => (
            <User
              id={el.id}
              name={el.name}
              status={el.status}
              smallPhoto={el.photos.small}
              followed={el.followed}
              unfollow={props.unfollow}
              follow={props.follow}
              isFollowingProgress={props.isFollowingProgress}
            />
          )
        )
      }

      <button onClick={() => {
      }}>Show More
      </button>
    </div>
  )

};
