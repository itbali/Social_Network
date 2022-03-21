import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem,} from "./DialogItem/DialogItem";
import {Message,} from "./Message/Message";
import {actionType, DialogItemType, MessageItemType} from "../../redux/store";
import {onMessageChangeTextActionCreator, onSendMessageActionCreator} from "../../redux/DialogsReducer";

type DialogsPropsType = {
    state: {
        messageData: Array<MessageItemType>
        dialogData: Array<DialogItemType>
        inputMessageText: string
    }
    dispatch: (action: actionType) => void

}

export const Dialogs = (props: DialogsPropsType) => {

    let DialogsElements = props.state.dialogData.map(el => <DialogItem name={el.name} id={el.id}/>)
    let MessagesElements = props.state.messageData.map(el => <Message message={el.message}/>)

    let sendMessage = () => {
        props.dispatch(onSendMessageActionCreator())
    }


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onMessageChangeTextActionCreator(e))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}

            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div>
                    <textarea value={props.state.inputMessageText} onChange={onChangeHandler}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};
