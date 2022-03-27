import React from 'react';

import {
    DialogsPageType,
    onMessageChangeTextActionCreator,
    onSendMessageActionCreator
} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

// type DialogsContainerPropsType = {
//     dialogsPage: DialogsPageType
//     dispatch: Dispatch
//
// }

// export const DialogsContainer = (props: DialogsContainerPropsType) => {
//
//
//     let sendMessage = () => {
//         props.dispatch(onSendMessageActionCreator())
//     }
//
//
//     const onChangeHandler = (text: string) => {
//         props.dispatch(onMessageChangeTextActionCreator(text))
//     }
//
//     return (
//         <Dialogs dialogsPage={props.dialogsPage} sendMessage={sendMessage} onChangeHandler={onChangeHandler}/>
//     );
// };

type MapStateType = { DialogsPage: DialogsPageType }

type mapDispatchPropsType = {
    sendMessage: () => void
    onChangeHandler: (text: string) => void
}

export type DialogsPropsType = MapStateType & mapDispatchPropsType

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        DialogsPage: state.DialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(onSendMessageActionCreator())
        },
        onChangeHandler: (text: string) => {
            dispatch(onMessageChangeTextActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
