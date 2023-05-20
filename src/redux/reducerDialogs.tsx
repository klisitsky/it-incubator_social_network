import {ActionsTypes, dialogsPageType} from "./store";
import {v1} from "uuid";
import {MessageType} from "../components/Dialogs/Message/Message";

const SEND_MESSAGE = 'sendMessage'
const CHANGE_MESSAGE_TEXT_DIALOG = 'changeMessageTextDialog'

export type DialogsActionsTypes = ReturnType<typeof sendMessageCreator> |
                                  ReturnType<typeof changeMessageTextDialogCreator>

const reducerDialogs = (state:dialogsPageType, action:ActionsTypes) => {
  switch (action.type) {
    case CHANGE_MESSAGE_TEXT_DIALOG:
      state.messageInTextAreaDialogs = action.messageInTextAreaDialogs ? action.messageInTextAreaDialogs : ''
      return state
    case SEND_MESSAGE:
      const newMessageId: string = v1()
      const newMessage: MessageType = {
        id: newMessageId,
        text: state.messageInTextAreaDialogs
      }
      state.messagesData.push(newMessage)
      state.messageInTextAreaDialogs = ''
      return state
    default:
      return state
  }
}

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
} as const)

export const changeMessageTextDialogCreator = (newMessage: string) => ({
  type: CHANGE_MESSAGE_TEXT_DIALOG,
  messageInTextAreaDialogs: newMessage
} as const)

export default reducerDialogs