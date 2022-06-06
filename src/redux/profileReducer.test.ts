import {addPost, deletePost, ProfileReducer} from "./profileReducer";

let state = {
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

it('posts array length should be incremented', () => {
    let action = addPost('it-bali')

    let newState = ProfileReducer(state, action)
    expect(newState.posts.length).toBe(3);
});
it('3d post text should be it-bali', () => {
    let action = addPost('it-bali')

    let newState = ProfileReducer(state, action)
    expect(newState.posts[2].postMessage).toBe('it-bali');
});
it('posts array length should be decremented', () => {
    let action = deletePost(state.posts.length)

    let newState = ProfileReducer(state, action)
    expect(newState.posts.length).toBe(1);
});
it('posts  should not be deleted if wrong ID is send', () => {
    let action = deletePost(state.posts.length + 1)

    let newState = ProfileReducer(state, action)
    expect(newState.posts.length).toBe(state.posts.length);
});
