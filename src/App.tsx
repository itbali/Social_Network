import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";
import {Dispatch, Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

type AppPropsType = {
    dispatch: Dispatch
    store: Store
}


const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<ProfileContainer/>}>
                        <Route path='/profile/:userId'
                               element={<ProfileContainer/>}/>
                    </Route>
                    <Route path='/dialogs/*'
                           element={<DialogsContainer
                               // dialogsPage={props.store.getState().DialogsPage}
                               // dispatch={props.dispatch}
                           />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
