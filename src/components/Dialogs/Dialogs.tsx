import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Dialog, DialogType} from "./Dialog/Dialog";
import {Message, MessageType} from "./Message/Message";
import RedirectLogin from "../RedirectLogin/RedirectLogin";


type DialogsPropsType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  messageInTextAreaDialogs: string
  changeMessageTextDialog: (value:string) => void
  sendMessage: () => void
  isAuth: boolean
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const renderedDialogs = props.dialogsData.map(dialogEl => {

    return <Dialog key={dialogEl.id} name={dialogEl.name} id={dialogEl.id}/>
  })
  const renderedMessages = props.messagesData.map(messageEl => {
    return <Message key={messageEl.id} text={messageEl.text} id={messageEl.id}/>
  })

  const onTextAreaChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
    props.changeMessageTextDialog(event.currentTarget.value)
  }
  const onSendMessageClickHandler = () => {
    props.sendMessage()
  }

  if (!props.isAuth) return <RedirectLogin/>
  return (
    <div className={s.messagesPage}>
      <div className={s.dialogs}>
        {renderedDialogs}
      </div>
      <div className={s.messages}>
        {renderedMessages}
        <div className={s.messageTextBody}>
          <textarea value={props.messageInTextAreaDialogs}
                    onChange={onTextAreaChangeHandler}>
          </textarea>
          <button style={{width: '40px', height: '20px'}} onClick={onSendMessageClickHandler}>send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs