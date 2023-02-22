import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {v1} from "uuid";


export const state = {
  profilePage: {
    mainLogoSite: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png',
    mainBackgroundProfile: "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/08/What_is_an_Infographic_Blog_Header.png",
    userPosts: [
      {
        id: 1,
        photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
        name: "Петя",
        surName: 'Иванов',
        message: 'Вау! Мой первый пост'
      },
      {
        id: 2,
        photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
        name: "Петя",
        surName: 'Иванов',
        message: 'А тут теперь второй!'
      },
      {
        id: 3,
        photoUrl: `https://cpad.ask.fm/a4e/d9461/7d98/4b6a/b9c6/f598b6ac16f1/large/67038.jpg`,
        name: "Петя",
        surName: 'Иванов',
        message: 'Только сидел и писал бы эти посты'
      }
    ]
  },
  dialogsPage: {
    dialogsData: [
      {id: 1, name: 'Артём' },
      {id: 2, name: 'Света' },
      {id: 3, name: 'Марина' },
      {id: 4, name: 'Катя' },
      {id: 5, name: 'Паша' }
    ],
    messagesData: [
      {id: 1, text: 'Хэй, чувак'},
      {id: 2, text: 'Как ты там?'},
      {id: 3, text: 'Давно не виделись'}
    ]
  },
  navbar: [
    {id: v1(), name: 'Profile', pageUrl: '/profile'},
    {id: v1(), name: 'Messages', pageUrl: '/dialogs'},
    {id: v1(), name: 'News', pageUrl: '/news'},
    {id: v1(), name: 'Music', pageUrl: '/music'},
    {id: v1(), name: 'Settings', pageUrl: '/settings'}
  ]
}

ReactDOM.render(
  <BrowserRouter>
    <App state={state}/>
  </BrowserRouter>,
  document.getElementById('root')
);