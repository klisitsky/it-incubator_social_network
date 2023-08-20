export const SEND_MESSAGE = 'sendMessage'
export const CHANGE_MESSAGE_TEXT_DIALOG = 'changeMessageTextDialog'


export const sendMessage = () => ({
  type: SEND_MESSAGE
} as const)

export const changeMessageTextDialog = (newMessage: string) => ({
  type: CHANGE_MESSAGE_TEXT_DIALOG,
  messageInTextAreaDialogs: newMessage
} as const)