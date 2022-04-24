import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/redux-store';
import {Provider} from "react-redux";


// const rerenderEntireTree = (state: RootStateType) => {

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
// }

// rerenderEntireTree(store.getState())
//
// store.subscribe(() => {
//
//     let state = store.getState()
//     rerenderEntireTree(state)
// })


//@ts-ignore
window.store = store

