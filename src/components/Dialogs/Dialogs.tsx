import React from 'react';
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {SendTextForm} from "../Profile/MyPosts/SendTextForm";

export const Dialogs = (props: DialogsPropsType) => {

    //вытягиваем данные из стейта для отрисовки сообщений и пользователей
    let DialogsElements = props.DialogsPage.dialogData.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let MessagesElements = props.DialogsPage.messageData.map(el => <Message key={el.id} message={el.message}/>)
    //отрисовываем кмпоненту
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsElements}

            </div>
            <div className={s.messages}>
                {MessagesElements}
                <div>
                    {/*подклчаем формик*/}
                    <SendTextForm onSubmitButtonClick={props.sendMessage} submitButtonName={"Отправить"}
                                  type={"input"}/>
                </div>
            </div>
        </div>
    );
};
