import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    followSuccess, requestUsers, setCurrentPages, toggleIsFollowingProgress,
    unFollowSuccess,
    UsersType
} from "../../redux/usersReducer";
import {RootStateType} from "../../redux/redux-store";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";

export type UserPropsType = mapStateType & mapDispatchType

export class UsersApiComponent extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        //
        // usersApi.requestUsers(this.props.currentPage, this.props.pageSize)
        //     .then((response) => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(response.items);
        //         this.props.setUsersTotalCount(response.totalCount)
        //     })
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)


        // this.props.setCurrentPages(pageNumber);
        // this.props.toggleIsFetching(true)
        // usersApi.requestUsers(pageNumber, this.props.pageSize)
        //     .then((response) => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(response.items);
        //     })
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
        users: state.UsersPage.Users,
        pageSize: state.UsersPage.pageSize,
        totalUserCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        isFollowingProgress: state.UsersPage.isFollowingProgress
    }
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow: followSuccess,
        unFollow: unFollowSuccess,
        setCurrentPages,
        toggleIsFollowingProgress,
        getUsers: requestUsers
    }),
    // withAuthRedirect
)(UsersApiComponent)


// export const UsersContainer = connect(mapStateToProps, {
//     follow: followSuccess,
//     unFollow: unFollowSuccess,
//     setCurrentPages,
//     toggleIsFollowingProgress,
//     requestUsers
// })(UsersApiComponent);
