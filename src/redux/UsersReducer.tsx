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
    Users: UsersType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    isFollowingProgress: Array<number>
}
type ActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPages>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

let initialState: UsersPageStateType = {
    Users: [],
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
                Users: state.Users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            })
        case UNFOLLOW:
            return ({
                ...state,
                Users: state.Users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            })
        case SET_USERS:
            return ({...state, Users: action.users})
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

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UsersType) => ({type: SET_USERS, users} as const)
export const setCurrentPages = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setUsersTotalCount = (totalCount: number) => ({type: SET_USERS_TOTAL_COUNT, totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, id: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    id,
} as const)
