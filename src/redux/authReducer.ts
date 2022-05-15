import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = "SET_LOGIN"
const SET_LOGOUT = "SET_LOGOUT"
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"

export type UserAuthType = {
    data: UserDataType
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}

export type UserDataType = {
    id: number | null,
    login: string,
    email: string,
    isAuth: boolean
}

let InitialState: UserAuthType = {
    data: {
        id: null,
        login: "",
        email: "",
        isAuth: false
    },
    messages: [],
    fieldsErrors: [],
    resultCode: 0
}

export const AuthReducer = (state: UserAuthType = InitialState, action: ActionsType): UserAuthType => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                data: {...action.data}
            }
        case "SET_LOGIN":
        case "SET_LOGOUT":
            return {...state, data: {...state.data, isAuth: action.isAuth}}
        case "SET_ERROR_MESSAGE":
            return {...state, messages: action.messages}
        default:
            return state

    }
}
type ActionsType =
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof loginAC> |
    ReturnType<typeof logoutAC> |
    ReturnType<typeof setErrorMessages>

const loginAC = () => {
    return ({type: SET_LOGIN, isAuth: true} as const)
}
const logoutAC = () => {
    return ({type: SET_LOGOUT, isAuth: false} as const)
}
const setErrorMessages = (messages: string[]) => {
    return ({type: SET_ERROR_MESSAGE, messages} as const)
}
export const setAuthUserData = (id: number, login: string, email: string) =>
    ({type: SET_USER_DATA, data: {id, login, email, isAuth: true}} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then((response) => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
}
export const login = (login: string, password: string, remember: boolean, setSubmitting: (isSubmition: boolean) => void, setStatus: (status: string) => void) => (dispatch: Dispatch<any>) => {

    authAPI.login(login, password, remember)
        .then((data) => {
            if (data.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(setErrorMessages(data.data.messages))
                setStatus(data.data.messages[0])
            }
            setSubmitting(false)
        })
}
export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout().then(data => {
        console.log(data);
        dispatch(logoutAC())
    })
}
