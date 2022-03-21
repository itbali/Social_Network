import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {
    DialogsPageType,

} from "../../redux/DialogsReducer";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    onChangeHandler: (text: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    let sendMessageHandler = () => {
        props.sendMessage()
    }


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    let DialogsElements = props.dialogsPage.dialogData.map(el => <DialogItem name={el.name} id={el.id}/>)
    let MessagesElements = props.dialogsPage.messageData.map(el => <Message message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}

            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div>
                    <textarea value={props.dialogsPage.inputMessageText} onChange={onChangeHandler}/>
                    <button onClick={sendMessageHandler}>Send</button>
                </div>
            </div>
        </div>
    );
};
