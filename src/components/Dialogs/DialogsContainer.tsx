import React, {ComponentType} from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {DialogType} from "./Dialog/Dialog";
import {MessageType} from "./Message/Message";
import {RootStateType} from "../../redux/redux-store";
import {sendMessage} from "../../redux/actions/actionsDialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type StatePropsType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
}

const mapStateToProps = (state: RootStateType): StatePropsType => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  }
}

type DispatchPropsType = {
  sendMessage: (dialogMessage: string) => void
}

export default compose<ComponentType>(
  React.memo,
  connect(mapStateToProps, {sendMessage} as DispatchPropsType),
  withAuthRedirect,
)(Dialogs)
