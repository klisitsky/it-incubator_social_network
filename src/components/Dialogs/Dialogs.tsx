import React from "react";
import s from './Dialogs.module.css'
import {Dialog, DialogType} from "./Dialog/Dialog";
import {Message, MessageType} from "./Message/Message";
import DialogMessageForm, {DialogMessageFormDataType} from "../forms/DialogMessageForm";


type DialogsPropsType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  sendMessage: (dialogMessage: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const renderedDialogs = props.dialogsData.map(dialogEl => {

    return <Dialog key={dialogEl.id} name={dialogEl.name} id={dialogEl.id}/>
  })
  const renderedMessages = props.messagesData.map(messageEl => {
    return <Message key={messageEl.id} text={messageEl.text} id={messageEl.id}/>
  })


  const onSubmitHandler = (formData: DialogMessageFormDataType) => {
    props.sendMessage(formData.dialogMessage)
  }



  return (
    <div className={s.messagesPage}>
      <div className={s.dialogs}>
        {renderedDialogs}
      </div>
      <div className={s.messages}>
        {renderedMessages}
        <DialogMessageForm onSubmit={onSubmitHandler}/>
      </div>
    </div>
  )
}

export default Dialogs