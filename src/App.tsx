import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {actionType, stateType} from "./redux/store";
import {RootStoreType} from "./redux/redux-store";
import {Store} from "redux";

type AppPropsType = {
    state: stateType
    dispatch: (action: actionType) => void
    store: Store<RootStoreType>
}


const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<Profile ProfilePage={props.store.getState().ProfilePage}
                                             dispatch={props.dispatch}
                           />}/>
                    <Route path='/dialogs/*'
                           element={<Dialogs state={props.store.getState().DialogsPage}
                                             dispatch={props.dispatch}
                           />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
