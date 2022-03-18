import s from "../Dialogs.module.css";
import React from "react";


export const Message = (props: { message: string }) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}