import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";

export type DialogItemType = {
    id: number, name: string
}
export type MessageItemType = {
    id: number, message: string
}
export type singlePostType = {
    id: number, postMessage: string, img: string, likeCount: number
}
export type ProfilePageType = {
    Posts: singlePostType[]
    NewPostText: string
}
export type DialogsPageType = {
    dialogData: Array<DialogItemType>
    messageData: Array<MessageItemType>
    inputMessageText: string
}
export type SideBarType = {}
export type stateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    SideBar: SideBarType
}
export type actionType = {
    type: 'ADD-POST' | 'UPDATE-CHANGE-TEXT' | 'ADD-MESSAGE-TEXT' | 'SEND_MESSAGE'
    newText?: string
}
export type storeType = {
    _state: stateType,
    _callSubscriber: (state: stateType) => void,
    getState: () => stateType
    subscriber: (callback: () => void) => void,
    dispatch: (action: actionType) => void
}

export const store: storeType = {
    _state: {
        ProfilePage: {
            Posts: [
                {
                    id: 1,
                    postMessage: 'Hi! How are you?',
                    img: 'https://image.shutterstock.com/image-vector/new-post-neon-text-video-600w-1444569020.jpg',
                    likeCount: 3
                },
                {
                    id: 2,
                    postMessage: "Nice to meet you here!",
                    img: '',
                    likeCount: 4
                }
            ],
            NewPostText: 'удалить значение из store.tsx'
        },
        DialogsPage: {
            dialogData: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Victor"},
                {id: 4, name: "Valera"}
            ],
            messageData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "How is your dog?"},
                {id: 4, message: "Write me please..."}
            ],
            inputMessageText: '',
        },
        SideBar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    subscriber(callback) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    },

    dispatch(action: actionType) {
        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = DialogsReducer(this._state.DialogsPage, action)
        this._state.SideBar = SidebarReducer(this._state.SideBar, action)
        this._callSubscriber(this._state);
    }
}