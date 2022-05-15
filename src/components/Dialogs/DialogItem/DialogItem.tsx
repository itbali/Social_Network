import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogItemType} from "../../../redux/dialogsReducer";

export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
