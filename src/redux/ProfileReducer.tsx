const UPDATE_CHANGE_TEXT = "UPDATE-CHANGE-TEXT"
const ADD_POST = 'ADD-POST';

export type SinglePostType = {
    id: number, postMessage: string, img: string, likeCount: number
}
export type ProfilePageType = {
    Posts: SinglePostType[]
    NewPostText: string
}

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

export const ProfileReducer = (state: ProfilePageType = InitialState, action: ActionsType): ProfilePageType => {
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
            if (action.newText.trim() != null) {
                return {...state, NewPostText: action.newText.trim()}
            } else return state
        }

        default:
            return state
    }
}
type ActionsType = ReturnType<typeof AddPostActionCreator> | ReturnType<typeof onPostChangeActionCreator>
export const AddPostActionCreator = () =>
    ({type: ADD_POST} as const)

export const onPostChangeActionCreator = (text: string) =>
    ({type: UPDATE_CHANGE_TEXT, newText: text} as const)
