import React from "react";
import {changeMessageTextDialog, sendMessage} from "../../redux/reducerDialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogType} from "./Dialog/Dialog";
import {MessageType} from "./Message/Message";
import {RootStateType} from "../../redux/redux-store";


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
  changeMessageTextDialog: (value: string) => void
  sendMessage: () => void
}

const SuperDialogsContainer = connect(mapStateToProps, {
  changeMessageTextDialog,
  sendMessage
} as DispatchPropsType)(Dialogs)

export default React.memo(SuperDialogsContainer)