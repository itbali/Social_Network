import {combineReducers, createStore, Store} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    SideBar: SidebarReducer,
})

export let store: Store = createStore(reducers)

export type RootStateType = ReturnType<typeof reducers>

//@ts-ignore
window.reduxStore = store