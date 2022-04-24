const SET_USER_DATA = 'SET_USER_DATA';

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
        default:
            return state

    }
}
type ActionsType = ReturnType<typeof SetAuthUserData>
export const SetAuthUserData = (id: number, login: string, email: string) =>
    ({type: SET_USER_DATA, data: {id, login, email, isAuth: true}} as const)



