import React from "react";
import {v1} from "uuid";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogType} from "../components/Dialogs/Dialog/Dialog";
import {MessageType} from "../components/Dialogs/Message/Message";
import {NavBarType} from "../components/NavBar/NavBar";
import reducerDialogs, {DialogsActionsTypes} from "./reducerDialogs";
import reducerNavbar from "./reducerNavbar";
import reducerProfile, {ProfileActionsTypes} from "./reducerProfile";


export type StateType = {
  profilePage: profilePageType
  dialogsPage: dialogsPageType
  navbar: Array<NavBarType>
}

export type profilePageType = {
  mainLogoSite: string
  mainBackgroundProfile: string
  messageInTextAreaPost: string
  userPosts: Array<PostType>
}

export type dialogsPageType = {
  dialogsData: Array<DialogType>
  messagesData: Array<MessageType>
  messageInTextAreaDialogs: string
}

export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes

export type StorePropsType = {
  _observer: () => void
  _state: StateType
  getState: () => StateType
  subscribe: (callback:() => void) => void
  dispatch: (action: ActionsTypes) => void
}


export const store: StorePropsType = {
  _observer() {
    console.log('Store changed')
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
    this._state.profilePage = reducerProfile(this._state.profilePage, action)
    this._state.dialogsPage = reducerDialogs(this._state.dialogsPage, action)
    this._state.navbar = reducerNavbar(this._state.navbar, action)
    this._observer()
  }
}