import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
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
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="container">
          <Header mainLogo={mainLogo}/>
          <NavBar/>
          <div className="container__content">
            <Route path="/dialogs/" component={Dialogs} />
            <Route path="/profile/" render={() => <Profile
              mainBackgroundProfile={mainBackgroundProfile}
              posts={UserPosts}/>}
              />
            <Route path="/music" component={Music}/>
            <Route path="/news" component={News}/>
            <Route path="/settings" component={Settings}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
