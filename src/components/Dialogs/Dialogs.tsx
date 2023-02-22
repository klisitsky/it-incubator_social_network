import React from "react";
import s from './Dialogs.module.css'
import {Dialog, DialogType} from "./Dialog/Dialog";
import {Message, MessageType} from "./Message/Message";


type DialogsPropsType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsData, messagesData}) => {

  const renderedDialogs = dialogsData.map(dialogEl => {
    return <Dialog name={dialogEl.name} id={dialogEl.id}/>
  })

  const renderedMessages = messagesData.map(messageEl => {
    return <Message text={messageEl.text} id={messageEl.id}/>
  })


  return (
    <div className={s.messagesPage}>
      <div className={s.dialogs}>
        {renderedDialogs}
      </div>
      <div className={s.messages}>
        {renderedMessages}
      </div>
    </div>
  )
}

export default Dialogs
