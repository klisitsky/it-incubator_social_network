export const SEND_DIALOG_MESSAGE = 'dialogs/SEND_DIALOG_MESSAGE'


export const sendMessage = (dialogMessage: string) => ({
  type: SEND_DIALOG_MESSAGE,
  payload: {
    dialogMessage
  }
} as const)
