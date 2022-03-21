import {actionType, DialogsPageType} from "./store";
import {ChangeEvent} from "react";

const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let InitialState: DialogsPageType = {
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

export const DialogsReducer = (state: DialogsPageType = InitialState, action: actionType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE-TEXT': {
            if (action.newText != null) {
                return {...state, inputMessageText: action.newText}
            } else return state
        }
        case 'SEND_MESSAGE': {
            let newMessage = state.inputMessageText
            state.inputMessageText = ''
            return {...state, messageData: [...state.messageData, {id: 6, message: newMessage}]}
        }
        default:
            return state

    }
}

export const onMessageChangeTextActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let action: actionType = {type: ADD_MESSAGE_TEXT, newText: e.currentTarget.value}
    return action
}

export const onSendMessageActionCreator = () => {
    let action: actionType = {type: SEND_MESSAGE}
    return action
}