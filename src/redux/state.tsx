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
    }
}
export type actionType = {
    type: 'ADD-POST' | 'UPDATE-CHANGE-TEXT'
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

export let store: storeType = {
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

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         postMessage: this._state.ProfilePage.NewPostText,
    //         img: '',
    //         likeCount: 0
    //     }
    //
    //     this._state.ProfilePage.Posts.push(newPost)
    //     this._state.ProfilePage.NewPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // updateChangeText(newText: string) {
    //     this._state.ProfilePage.NewPostText = newText
    //     this._callSubscriber(this._state)
    // },

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
            default:
                this._callSubscriber(this._state)
        }
    }

}



