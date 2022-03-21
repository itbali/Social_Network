import {actionType, ProfilePageType} from "./store";
import {ChangeEvent} from "react";


const UPDATE_CHANGE_TEXT = "UPDATE-CHANGE-TEXT"
const ADD_POST = 'ADD-POST';

let InitialState: ProfilePageType = {
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
}

export const ProfileReducer = (state: ProfilePageType = InitialState, action: actionType) => {
    switch (action.type) {
        case ADD_POST: {
            debugger
            let newPost = {
                id: 5,
                postMessage: state.NewPostText,
                img: '',
                likeCount: 0
            }

            state.NewPostText = ''

            return {...state, Posts: [...state.Posts, newPost]}
        }
        case UPDATE_CHANGE_TEXT: {
            if (action.newText != null) {
                return {...state, NewPostText: action.newText}
            } else return state
        }
        default:
            return state
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