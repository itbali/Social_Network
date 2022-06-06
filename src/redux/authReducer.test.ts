import {AuthReducer, loginAC, logout, logoutAC, setErrorMessages, UserAuthType} from "./authReducer";

let state: UserAuthType = {
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

it('isAuth should be true after login', () => {
    let action = loginAC()
    let newState = AuthReducer(state, action)
    expect(newState.data.isAuth).toBeTruthy();
});
it('isAuth should be false after logout', () => {
    let action = logoutAC()
    let newState = AuthReducer(state, action)
    expect(newState.data.isAuth).toBeFalsy();
});
it('error should be added to messages', () => {
    let action = setErrorMessages(['error'])
    let newState = AuthReducer(state, action)
    expect(newState.messages.length).toBe(state.messages.length + 1);
});
