import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";
import {MessageType} from "../components/Dialogs/Message/Message";
import {DialogType} from "../components/Dialogs/Dialog/Dialog";

const SEND_MESSAGE = 'sendMessage'
const CHANGE_MESSAGE_TEXT_DIALOG = 'changeMessageTextDialog'

export type DialogsActionsTypes = ReturnType<typeof sendMessageCreator> |
                                  ReturnType<typeof changeMessageTextDialogCreator>

export type dialogsPageType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  messageInTextAreaDialogs: string
}

const initialState: dialogsPageType = {
  dialogsData: [
    {id: 1, name: 'Артём'},
    {id: 2, name: 'Света'},
    {id: 3, name: 'Марина'},
    {id: 4, name: 'Катя'},
    {id: 5, name: 'Паша'}
  ],
  messagesData: [
    {id: v1(), text: 'Хэй, чувак'},
    {id: v1(), text: 'Как ты там?'},
    {id: v1(), text: 'Давно не виделись'}
  ],
  messageInTextAreaDialogs: ''
}

const reducerDialogs = (state:dialogsPageType = initialState, action:ActionsTypes) => {
  switch (action.type) {
    case CHANGE_MESSAGE_TEXT_DIALOG:
      return {...state, messageInTextAreaDialogs: action.messageInTextAreaDialogs ? action.messageInTextAreaDialogs : ''}
    case SEND_MESSAGE:
      const newMessageId: string = v1()
      const newMessage: MessageType = {
        id: newMessageId,
        text: state.messageInTextAreaDialogs
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        messageInTextAreaDialogs: ''
      }
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