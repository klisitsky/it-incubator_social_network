import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

let mainLogo = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png'

let mainBackgroundProfile = "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/08/What_is_an_Infographic_Blog_Header.png"

const UserPosts = [
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


const App = () => {
  return (
    <div className="app-wrapper">
    <div className="container">
      <Header mainLogo={mainLogo}/>
      <NavBar/>
      <Profile mainBackgroundProfile={mainBackgroundProfile} posts={UserPosts}/>
    </div>
  </div>
  );
}

export default App;
