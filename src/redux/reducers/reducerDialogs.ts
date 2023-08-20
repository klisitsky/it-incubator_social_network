import {v1} from "uuid";
import {MessageType} from "../../components/Dialogs/Message/Message";
import {DialogType} from "../../components/Dialogs/Dialog/Dialog";
import {
  CHANGE_MESSAGE_TEXT_DIALOG,
  changeMessageTextDialog,
  SEND_MESSAGE,
  sendMessage
} from "../actions/actionsDialogs";


export type DialogsActionsTypes = ReturnType<typeof sendMessage> |
                                  ReturnType<typeof changeMessageTextDialog>

type initialStateType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  messageInTextAreaDialogs: string
}

const initialState: initialStateType = {
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

const reducerDialogs = (state:initialStateType = initialState, action:DialogsActionsTypes): initialStateType => {
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



export default reducerDialogs