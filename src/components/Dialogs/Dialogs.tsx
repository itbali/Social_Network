import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";

// type DialogsPropsType = {
//     dialogsPage: DialogsPageType
//     sendMessage: () => void
//     onChangeHandler: (text: string) => void
// }

export const Dialogs = (props: DialogsPropsType) => {

    let sendMessageHandler = () => {
        props.sendMessage()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    let DialogsElements = props.DialogsPage.dialogData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let MessagesElements = props.DialogsPage.messageData.map(el => <Message key={el.id} message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}

            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div>
                    <textarea value={props.DialogsPage.inputMessageText} onChange={onChangeHandler}/>
                    <button onClick={sendMessageHandler}>Send</button>
                </div>
            </div>
        </div>
    );
};
