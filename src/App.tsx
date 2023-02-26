import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {StateType} from "./state";

export type AppPropsType = {
  state: StateType
  addPost: (postMessage:string) => void
}

export const App: React.FC<AppPropsType> = (props) => {

  const {mainLogoSite, mainBackgroundProfile, userPosts} = props.state.profilePage
  const {dialogsData, messagesData} = props.state.dialogsPage

  debugger;
  return (
      <div className="app-wrapper">
        <div className="container">
          <Header mainLogo={mainLogoSite}/>
          <NavBar navbar={props.state.navbar}/>
          <div className="container__content">
            <Route path="/dialogs/" render={() => <Dialogs
              dialogsData={dialogsData}
              messagesData={messagesData}
            />} />
            <Route path="/profile/" render={() => <Profile
              mainBackgroundProfile={mainBackgroundProfile}
              posts={userPosts}
              addPost={props.addPost}/>}/>
            <Route path="/music" component={Music}/>
            <Route path="/news" component={News}/>
            <Route path="/settings" component={Settings}/>
          </div>
        </div>
      </div>
  );
}

export default App;
