import s from "../Dialogs.module.css";
import React from "react";

export type MessageType = {
  id: string
  text: string
}

export const Message: React.FC<MessageType> = (props) => {
  return <div key={props.id} className={s.message}>{props.text}</div>
}