import {ChangeEvent} from "react";

const UPDATE_CHANGE_TEXT = "UPDATE-CHANGE-TEXT"
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type DialogItemType = {
    id: number, name: string
}
export type MessageItemType = {
    id: number, message: string
}
export type singlePostType = {
    id: number, postMessage: string, img: string, likeCount: number
}
export type stateType = {
    ProfilePage: {
        Posts: singlePostType[]
        NewPostText: string
    }
    DialogsPage: {
        dialogData: Array<DialogItemType>
        messageData: Array<MessageItemType>
        inputMessageText: string
    }
}
export type actionType = {
    type: 'ADD-POST' | 'UPDATE-CHANGE-TEXT' | 'ADD-MESSAGE-TEXT' | 'SEND_MESSAGE'
    newText?: string
}
export type storeType = {
    _state: stateType,
    _callSubscriber: (state: stateType) => void,
    getState: () => stateType
    // addPost: () => void,
    // updateChangeText: (newText: string) => void,
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
            NewPostText: 'удалить значение из state.tsx'
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
        }
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
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: 5,
                    postMessage: this._state.ProfilePage.NewPostText,
                    img: '',
                    likeCount: 0
                }
                this._state.ProfilePage.Posts.push(newPost)
                this._state.ProfilePage.NewPostText = ''
                this._callSubscriber(this._state)
                break;

            case 'UPDATE-CHANGE-TEXT':
                if (action.newText != null) {
                    this._state.ProfilePage.NewPostText = action.newText
                }
                this._callSubscriber(this._state)
                break;

            case 'ADD-MESSAGE-TEXT':
                if (action.newText != null) {
                    this._state.DialogsPage.inputMessageText = action.newText
                }
                this._callSubscriber(this._state)
                break;

            case 'SEND_MESSAGE':
                let newMessage = this._state.DialogsPage.inputMessageText
                this._state.DialogsPage.messageData.push({id: 100, message: newMessage})
                this._state.DialogsPage.inputMessageText = ''
                this._callSubscriber(this._state)
                break

            default:
                this._callSubscriber(this._state)
        }
    }
}


export const AddPostActionCreator = () => {
    let action: actionType = {type: ADD_POST}
    return action
}
export const onPostChangeActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let action: actionType = {type: UPDATE_CHANGE_TEXT, newText: e.currentTarget.value}
    return action
}

export const onMessageChangeTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let action: actionType = {type: ADD_MESSAGE_TEXT, newText: e.currentTarget.value}
    return action
}

export const onSendMessageActionCreator = () => {
    let action: actionType = {type: SEND_MESSAGE}
    return action
}