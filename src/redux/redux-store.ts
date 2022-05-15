import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {ProfileReducer} from "./profileReducer";
import {DialogsReducer} from "./dialogsReducer";
import {SidebarReducer} from "./sidebarReducer";
import {UsersReducer} from "./usersReducer";
import {AuthReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./appReducer";

let rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    SideBar: SidebarReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    App: appReducer
})

export let store: Store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type RootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
