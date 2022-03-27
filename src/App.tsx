import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {RootStateType} from "./redux/redux-store";
import {Dispatch, Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    dispatch: Dispatch
    store: Store
}


const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<Profile profilePage={props.store.getState().ProfilePage}
                                             dispatch={props.dispatch}
                           />}/>
                    <Route path='/dialogs/*'
                           element={<DialogsContainer
                               // dialogsPage={props.store.getState().DialogsPage}
                               // dispatch={props.dispatch}
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
