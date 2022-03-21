import React from 'react';

import {
    DialogsPageType,
    onMessageChangeTextActionCreator,
    onSendMessageActionCreator
} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";

type DialogsContainerPropsType = {
    dialogsPage: DialogsPageType
    dispatch: Dispatch

}

export const DialogsContainer = (props: DialogsContainerPropsType) => {


    let sendMessage = () => {
        props.dispatch(onSendMessageActionCreator())
    }


    const onChangeHandler = (text: string) => {
        props.dispatch(onMessageChangeTextActionCreator(text))
    }

    return (
        <Dialogs dialogsPage={props.dialogsPage} sendMessage={sendMessage} onChangeHandler={onChangeHandler}/>
    );
};
