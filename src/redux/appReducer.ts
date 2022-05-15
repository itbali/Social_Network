import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type appReducerStateType = {
    initialized: boolean
}

let InitialState: appReducerStateType = {
    initialized: false
}

export const appReducer = (state: appReducerStateType = InitialState, action: ActionsType): appReducerStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {...state, initialized: true}
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof initializedSuccess>

const initializedSuccess = () => {
    return ({type: INITIALIZED_SUCCESS} as const)
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}
