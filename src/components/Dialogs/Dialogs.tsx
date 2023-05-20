import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Dialog, DialogType} from "./Dialog/Dialog";
import {Message, MessageType} from "./Message/Message";
import {ActionsTypes} from "../../redux/store";
import {changeMessageTextDialogCreator, sendMessageCreator} from "../../redux/reducerDialogs";


type DialogsPropsType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  messageInTextAreaDialogs: string
  dispatch: (action: ActionsTypes) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

  const renderedDialogs = props.dialogsData.map(dialogEl => {

    return <Dialog key={dialogEl.id} name={dialogEl.name} id={dialogEl.id}/>
  })
  const renderedMessages = props.messagesData.map(messageEl => {
    return <Message key={messageEl.id} text={messageEl.text} id={messageEl.id}/>
  })

  const onChangeTextArea = (event:ChangeEvent<HTMLTextAreaElement>) => {
    const action = changeMessageTextDialogCreator(event.currentTarget.value)
    props.dispatch(action)
  }
  const sendMessage = () => {
    const action = sendMessageCreator()
    props.dispatch(action)
  }

  return (
    <div className={s.messagesPage}>
      <div className={s.dialogs}>
        {renderedDialogs}
      </div>
      <div className={s.messages}>
        {renderedMessages}
        <div className={s.messageTextBody}>
          <textarea value={props.messageInTextAreaDialogs}
                    onChange={onChangeTextArea}>
          </textarea>
          <button style={{width: '40px', height: '20px'}} onClick={sendMessage}>send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs