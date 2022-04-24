import {combineReducers, createStore, Store} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";

let rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    SideBar: SidebarReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer
})

export let store: Store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
