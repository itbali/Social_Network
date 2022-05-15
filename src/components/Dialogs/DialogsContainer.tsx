import React from 'react';
import {DialogsPageType, onSendMessageActionCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStateType = {
    DialogsPage: DialogsPageType
}

type mapDispatchPropsType = {
    sendMessage: (text: string) => void
}

export type DialogsPropsType = MapStateType & mapDispatchPropsType

let mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        DialogsPage: state.DialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        sendMessage: (text: string) => {
            dispatch(onSendMessageActionCreator(text))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)
(Dialogs)
