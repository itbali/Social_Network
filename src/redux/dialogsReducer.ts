// const ADD_MESSAGE_TEXT = 'ADD-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type DialogsPageType = {
    dialogData: Array<DialogItemType>
    messageData: Array<MessageItemType>
}

export type DialogItemType = {
    id: number, name: string
}
export type MessageItemType = {
    id: number, message: string
}

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
}

let id = 10

export const DialogsReducer = (state: DialogsPageType = InitialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        // case 'ADD-MESSAGE-TEXT': {
        //     if (action.newText != null) {
        //         return {...state, inputMessageText: action.newText}
        //     } else return state
        // }
        case 'SEND_MESSAGE': {
            let newMessage = action.newText
            id++
            return {...state, messageData: [...state.messageData, {id, message: newMessage}]}
        }
        default:
            return state
    }
}
type ActionsType =
// ReturnType<typeof onMessageChangeTextActionCreator> |
    ReturnType<typeof onSendMessageActionCreator>

// export const onMessageChangeTextActionCreator = (text: string) =>
//     ({type: ADD_MESSAGE_TEXT, newText: text} as const)
export const onSendMessageActionCreator = (newText: string) =>
    ({type: SEND_MESSAGE, newText} as const)

