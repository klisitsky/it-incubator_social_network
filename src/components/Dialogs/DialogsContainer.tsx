import React from "react";
import {changeMessageTextDialogCreator, sendMessageCreator} from "../../redux/reducerDialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogType} from "./Dialog/Dialog";
import {MessageType} from "./Message/Message";
import {DispatchType, RootStateType} from "../../redux/redux-store";


export type StatePropsType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  messageInTextAreaDialogs: string
}

const mapStateToProps = (state: RootStateType):StatePropsType => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    messageInTextAreaDialogs: state.dialogsPage.messageInTextAreaDialogs
  }
}

type DispatchPropsType = {
  changeTextArea: (value: string) => void
  sendMessage: () => void
}

const mapDispatchToProps = (dispatch: DispatchType):DispatchPropsType => {
  return {
    changeTextArea(value: string) {
      const action = changeMessageTextDialogCreator(value)
      dispatch(action)
    },
    sendMessage() {
      const action = sendMessageCreator()
      dispatch(action)
    }
  }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default React.memo(SuperDialogsContainer)