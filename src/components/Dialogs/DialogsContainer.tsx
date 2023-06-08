import React from "react";
import {changeMessageTextDialogCreator, sendMessageCreator} from "../../redux/reducerDialogs";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";




const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState()

        const changeTextArea = (value:string) => {
          const action = changeMessageTextDialogCreator(value)
          store.dispatch(action)
        }

        const sendMessage = () => {
          const action = sendMessageCreator()
          store.dispatch(action)
        }

       return <Dialogs dialogsData={state.dialogsPage.dialogsData}
                       messagesData={state.dialogsPage.messagesData}
                       messageInTextAreaDialogs={state.dialogsPage.messageInTextAreaDialogs}
                       changeTextArea={changeTextArea}
                       sendMessage={sendMessage}/>
      }}

  </StoreContext.Consumer>
  )
}

export default DialogsContainer