const UPDATE_CHANGE_TEXT = "UPDATE-CHANGE-TEXT"
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type SinglePostType = {
    id: number, postMessage: string, img: string, likeCount: number
}
export type ProfileType = {

    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }

}

export type ProfilePageType = {
    profile: ProfileType
    Posts: SinglePostType[]
    NewPostText: string
}

let InitialState: ProfilePageType = {
    profile: {
        aboutMe: 'aboutMe',
        contacts: {
            facebook: 'facebook',
            website: 'website',
            vk: 'vk',
            twitter: 'twitter',
            instagram: 'instagram',
            youtube: 'youtube',
            github: 'github',
            mainLink: 'mainLink'
        },
        lookingForAJob: false,
        lookingForAJobDescription: 'lookingForAJobDescription',
        fullName: 'fullName',
        userId: 0,
        photos: {
            small: 'string',
            large: 'string'

        }
    },
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

        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

type ActionsType =
    ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof onPostChangeActionCreator>
    | ReturnType<typeof SetUserProfile>

export const AddPostActionCreator = () =>
    ({type: ADD_POST} as const)

export const onPostChangeActionCreator = (text: string) =>
    ({type: UPDATE_CHANGE_TEXT, newText: text} as const)

export const SetUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE, profile
} as const)

