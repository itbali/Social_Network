import {combineReducers, createStore, Store} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";

let rootReducer = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    SideBar: SidebarReducer,
})

export let store: Store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.reduxStore = store