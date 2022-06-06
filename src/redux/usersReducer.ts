import {usersApi} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type SingleUserType = {
  id: number,
  photos: {
    small: string,
    large: string,
  }
  followed: boolean,
  name: string,
  status: string,
  location: {
    city: string,
    country: string,
  }
}
export type UsersType = Array<SingleUserType>

export type UsersPageStateType = {
  users: UsersType,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  isFollowingProgress: Array<number>
}
type ActionType =
  ReturnType<typeof followSuccess>
  | ReturnType<typeof unFollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPages>
  | ReturnType<typeof setUsersTotalCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleIsFollowingProgress>

let initialState: UsersPageStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
}

export const UsersReducer = (state: UsersPageStateType = initialState, action: ActionType): UsersPageStateType => {
  switch (action.type) {
    case FOLLOW:
      return ({
        ...state,
        users: updateObjectInArray(state.users, action.userID, "id", {followed: true})
        // users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
      })
    case UNFOLLOW:
      return ({
        ...state,
        users: updateObjectInArray(state.users, action.userID, "id", {followed: false})
      })
    case SET_USERS:
      return ({...state, users: action.users})
    case SET_CURRENT_PAGE:
      return ({...state, currentPage: action.currentPage})
    case SET_USERS_TOTAL_COUNT:
      return ({...state, totalUsersCount: action.totalCount})
    case TOGGLE_IS_FETCHING:
      return ({...state, isFetching: action.isFetching})
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return ({
        ...state, isFollowingProgress:
          action.isFetching
            ? [...state.isFollowingProgress, action.id]
            : state.isFollowingProgress.filter(el => el !== action.id)
      })
    default:
      return ({...state})
  }
}

export const followSuccess = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowSuccess = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UsersType) => ({type: SET_USERS, users} as const)
export const setCurrentPages = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCount = (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, id: number) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  id,
} as const)

export const requestUsers = (requestingPage: number, pageSize: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPages(requestingPage))
    let response = await usersApi.getUsers(requestingPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items));
    dispatch(setUsersTotalCount(response.totalCount))
  }
}

const followUnfollowFlow = async (UserID: number, dispatch: Dispatch, apiMethod: any, actionCreator: (...args: any) => ActionType) => {
  dispatch(toggleIsFollowingProgress(true, UserID))
  let data = await apiMethod(UserID)
  if (data.resultCode === 0) {
    dispatch(actionCreator(UserID))
  }
  dispatch(toggleIsFollowingProgress(false, UserID))
}

export const follow = (UserID: number) => {
  return async (dispatch: Dispatch) => {
    await followUnfollowFlow(UserID, dispatch, usersApi.follow.bind(UserID), followSuccess)
  }
}
export const unfollow = (UserID: number) => {
  return async (dispatch: Dispatch) => {
    await followUnfollowFlow(UserID, dispatch, usersApi.unFollow.bind(UserID), unFollowSuccess)
  }
}
