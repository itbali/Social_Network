import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
  status: string
  posts: SinglePostType[]
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
  status: '',
  posts: [
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
  ]
}

export const ProfileReducer = (state: ProfilePageType = InitialState, action: ActionsType): ProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.random(),
        postMessage: action.post,
        img: '',
        likeCount: 0
      }
      return {...state, posts: [...state.posts, newPost]}
    }
    case SET_STATUS:
      return {...state, status: action.status}
    case "SET_USER_PROFILE":
      return {...state, profile: action.profile}
    case "DELETE_POST":
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
    default:
      return state
  }
}

type ActionsType =
  ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof deletePost>

export const addPost = (post: string) =>
  ({type: ADD_POST, post} as const)

export const deletePost = (postId: number) =>
  ({type: DELETE_POST, postId} as const)

export const setUserProfile = (profile: ProfileType) => ({
  type: SET_USER_PROFILE, profile
} as const)
export const setStatus = (status: string) => ({
  type: SET_STATUS, status
} as const)

//thunks
export const getUserProfile = (userID: string) => async (dispatch: Dispatch) => {
  let response = await profileAPI.getProfile(userID)
  dispatch(setUserProfile(response))
}
export const getStatus = (userID: string) => async (dispatch: Dispatch) => {
  let response = await profileAPI.getStatus(userID)
  dispatch(setStatus(response))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.resultCode === 0) {
    dispatch(setStatus(response))
  }
}

