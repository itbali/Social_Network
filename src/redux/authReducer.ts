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

export const loginAC = () => {
  return ({type: SET_LOGIN, isAuth: true} as const)
}
export const logoutAC = () => {
  return ({type: SET_LOGOUT, isAuth: false} as const)
}
export const setErrorMessages = (messages: string[]) => {
  return ({type: SET_ERROR_MESSAGE, messages} as const)
}
export const setAuthUserData = (id: number, login: string, email: string) =>
  ({type: SET_USER_DATA, data: {id, login, email, isAuth: true}} as const)

export const getAuthUserData = () => async (dispatch: Dispatch) => {
  let response = await authAPI.me()

  if (response.resultCode === 0) {
    let {id, login, email} = response.data
    dispatch(setAuthUserData(id, login, email))
  }
}
export const login = (login: string, password: string, remember: boolean, setSubmitting: (isSubmition: boolean) => void, setStatus: (status: string) => void) => async (dispatch: Dispatch<any>) => {

  let response = await authAPI.login(login, password, remember)
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    dispatch(setErrorMessages(response.data.messages))
    setStatus(response.data.messages[0])
  }
  setSubmitting(false)
}
export const logout = () => async (dispatch: Dispatch) => {
  let response = await authAPI.logout().then(data => {
    dispatch(logoutAC())
  })
}
