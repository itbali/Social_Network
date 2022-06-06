import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {
  follow,
  requestUsers,
  setCurrentPages,
  toggleIsFollowingProgress,
  unfollow,
  UsersType
} from "../../redux/usersReducer";
import {RootStateType} from "../../redux/store";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";

export type UserPropsType = mapStateType & mapDispatchType

export class UsersApiComponent extends React.Component<UserPropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }


  render() {

    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUserCount={this.props.totalUserCount}
             pageSize={this.props.pageSize}
             onPageChanged={this.onPageChanged}
             currentPage={this.props.currentPage}
             users={this.props.users}
             unfollow={this.props.unFollow}
             follow={this.props.follow}
             isFollowingProgress={this.props.isFollowingProgress}
      />
    </>
  }
}


type mapStateType = {
  users: UsersType,
  pageSize: number,
  totalUserCount: number,
  currentPage: number,
  isFetching: boolean,
  isFollowingProgress: Array<number>
}
type mapDispatchType = {
  follow: (id: number) => void
  unFollow: (id: number) => void
  setCurrentPages: (currentPage: number) => void
  toggleIsFollowingProgress: (isFetching: boolean, id: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: RootStateType): mapStateType => {
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUserCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
    isFollowingProgress: state.UsersPage.isFollowingProgress
  }
}

export const UsersContainer = compose<React.ComponentType>(
  connect(mapStateToProps, {
    follow: follow,
    unFollow: unfollow,
    setCurrentPages,
    toggleIsFollowingProgress,
    getUsers: requestUsers
  }),
  // withAuthRedirect
)(UsersApiComponent)
