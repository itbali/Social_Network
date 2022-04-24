import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    follow, setCurrentPages,
    setUsers, setUsersTotalCount,
    toggleIsFetching, toggleIsFollowingProgress,
    unFollow,
    UsersType
} from "../../redux/UsersReducer";
import {RootStateType} from "../../redux/redux-store";
import Preloader from "../Common/Preloader/Preloader";
import {samuraiApi} from "../../api/api";

export type UserPropsType = mapStateType & mapDispatchType

export class UsersApiComponent extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        samuraiApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items);
                this.props.setUsersTotalCount(response.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPages(pageNumber);
        this.props.toggleIsFetching(true)
        samuraiApi.getUsers(pageNumber, this.props.pageSize)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items);
            })
    }


    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onUnFollowClickHandler={this.props.unFollow}
                   onFollowClickHandler={this.props.follow}
                   isFollowingProgress={this.props.isFollowingProgress}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
    setUsers: (users: UsersType) => void
    setCurrentPages: (currentPage: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isFetching: boolean, id: number) => void
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

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchType => {
//     return {
//         follow: (id: number) => {
//             dispatch(follow(id))
//         },
//         unFollow: (id: number) => {
//             dispatch(unFollow(id))
//         },
//         setUsers: (users: Array<SingleUserType>) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPages: (currentPage: number) => {
//             dispatch(setCurrentPages(currentPage))
//         },
//         setUsersTotalCount: (totalCount: number) => {
//             dispatch(setUsersTotalCount(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPages,
    setUsersTotalCount,
    toggleIsFetching,
    toggleIsFollowingProgress
})(UsersApiComponent);
