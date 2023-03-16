import React from "react";
import {v1} from "uuid";
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {DialogType} from "./components/Dialogs/Dialog/Dialog";
import {MessageType} from "./components/Dialogs/Message/Message";
import {NavBarType} from "./components/NavBar/NavBar";

const ADD_POST = 'addPost'
const CHANGE_MESSAGE_TEXT_POST = 'changeMessageTextPost'
const SEND_MESSAGE = 'sendMessage'
const CHANGE_MESSAGE_TEXT_DIALOG = 'changeMessageTextDialog'

export type StateType = {
  profilePage: {
    mainLogoSite: string
    mainBackgroundProfile: string
    messageInTextAreaPost: string
    userPosts: Array<PostType>
  }
  dialogsPage: {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    messageInTextAreaDialogs: string
  }
  navbar: Array<NavBarType>
}
export type StorePropsType = {
  _observer: () => void
  _state: StateType
  getState: () => StateType
  subscribe: (callback:() => void) => void
  dispatch: (action: DispatchType) => void
}
export type DispatchType = {
  type: string
  newMessagePostText?: string
  newMessageDialogText?: string
}


export const store: StorePropsType = {
  _observer() {
    console.log('Render start')
  },
  _state: {
    profilePage: {
      mainLogoSite: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png',
      mainBackgroundProfile: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/08/What_is_an_Infographic_Blog_Header.png",
      userPosts: [
        {
          id: v1(),
          photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
          name: "Петя",
          surName: 'Иванов',
          message: 'Вау! Мой первый пост'
        },
        {
          id: v1(),
          photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
          name: "Петя",
          surName: 'Иванов',
          message: 'А тут теперь второй!'
        },
        {
          id: v1(),
          photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
          name: "Петя",
          surName: 'Иванов',
          message: 'Только сидел и писал бы эти посты'
        }
      ],
      messageInTextAreaPost: '',
    },
    dialogsPage: {
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
    },
    navbar: [
      {id: v1(), name: 'Profile', pageUrl: '/profile'},
      {id: v1(), name: 'Messages', pageUrl: '/dialogs'},
      {id: v1(), name: 'News', pageUrl: '/news'},
      {id: v1(), name: 'Music', pageUrl: '/music'},
      {id: v1(), name: 'Settings', pageUrl: '/settings'}
    ]
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._observer = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case CHANGE_MESSAGE_TEXT_POST:
        this._state.profilePage.messageInTextAreaPost = action.newMessagePostText ? action.newMessagePostText : '';
        this._observer();
        break;
      case ADD_POST:
        const newPost: PostType = {
          id: v1(),
          photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
          name: "Петя",
          surName: 'Иванов',
          message: this._state.profilePage.messageInTextAreaPost
        }
        this._state.profilePage.userPosts.push(newPost);
        this._state.profilePage.messageInTextAreaPost = ''
        this._observer();
        break;
      case CHANGE_MESSAGE_TEXT_DIALOG:
        this._state.dialogsPage.messageInTextAreaDialogs = action.newMessageDialogText ? action.newMessageDialogText : '';
        this._observer();
        break;
      case SEND_MESSAGE:
        const newMessageId: string = v1()
        const newMessage: MessageType = {
          id: newMessageId,
          text: this._state.dialogsPage.messageInTextAreaDialogs
        }
        this._state.dialogsPage.messagesData.push(newMessage)
        this._state.dialogsPage.messageInTextAreaDialogs = ''
        this._observer()
        break
    }
  }
}

export const addPostCreator = () => ({
  type: ADD_POST
})

export const changeMessageTextPostCreator = (newMessage: string) => ({
  type: CHANGE_MESSAGE_TEXT_POST,
  newMessagePostText: newMessage
})

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
})

export const changeMessageTextDialogCreator = (newMessage: string) => ({
  type: CHANGE_MESSAGE_TEXT_DIALOG,
  newMessageDialogText: newMessage
})