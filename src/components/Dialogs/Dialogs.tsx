import React, {createRef} from 'react';
import s from './Dialogs.module.css';
import {DialogItem,} from "./DialogItem/DialogItem";
import {Message,} from "./Message/Message";
import {DialogItemType, MessageItemType} from "../../redux/state";

type DialogsPropsType = {
    state: {
        messageData: Array<MessageItemType>
        dialogData: Array<DialogItemType>
    }

}

export const Dialogs = (props: DialogsPropsType) => {

    let DialogsElements = props.state.dialogData.map(el => <DialogItem name={el.name} id={el.id}/>)
    let MessagesElements = props.state.messageData.map(el => <Message message={el.message}/>)


    let messageText = createRef<HTMLTextAreaElement>()
    let sendMessage = () => {
        alert(messageText.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}

            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div>
                    <textarea ref={messageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};
