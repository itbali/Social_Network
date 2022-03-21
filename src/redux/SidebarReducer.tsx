import {actionType, SideBarType} from "./store";

let InitialState: SideBarType = {}

export const SidebarReducer = (state: SideBarType = InitialState, action: actionType) => {
    switch (action.type) {
        default:
            return state
    }

}