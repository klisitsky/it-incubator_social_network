import React, {RefObject} from "react";
import s from './Dialogs.module.css'
import {Dialog, DialogType} from "./Dialog/Dialog";
import {Message, MessageType} from "./Message/Message";


type DialogsPropsType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
}

const Dialogs: React.FC<DialogsPropsType> = ({dialogsData, messagesData}) => {

  const renderedDialogs = dialogsData.map(dialogEl => {

    return <Dialog key={dialogEl.id} name={dialogEl.name} id={dialogEl.id}/>
  })

  const renderedMessages = messagesData.map(messageEl => {
    return <Message key={messageEl.id} text={messageEl.text} id={messageEl.id}/>
  })

  const fieldNewMessage: RefObject<HTMLTextAreaElement> = React.createRef();

  const addMessage = () => {
    alert(fieldNewMessage.current?.value)
  }

  return (
    <div className={s.messagesPage}>
      <div className={s.dialogs}>
        {renderedDialogs}
      </div>
      <div className={s.messages}>
        {renderedMessages}
      </div>
      <textarea ref={fieldNewMessage}></textarea>
      <button style={{width: '40px', height: '20px'}} onClick={addMessage}>send</button>
    </div>
  )
}

export default Dialogs
