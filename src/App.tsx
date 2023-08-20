import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersSearchContainer from "./components/UsersSearch/UsersSearchContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";



export const App = () => {
  return (
      <div className="app-wrapper">
        <div className="container">
          <HeaderContainer/>
          <NavBarContainer/>
          <div className="container__content">
            <Route path="/dialogs/" component={DialogsContainer}/>
            <Route path="/profile/:userId?" component={ProfileContainer}/>
            <Route path="/music" component={Music}/>
            <Route path="/news" component={News}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/search" component={UsersSearchContainer}/>
            <Route path="/login" component={Login}/>
          </div>
        </div>
      </div>
  );
}

export default App;
