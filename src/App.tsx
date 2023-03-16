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
import {DispatchType, StateType} from "./state";

export type AppPropsType = {
  state: StateType
  dispatch: (action: DispatchType) => void
}

export const App: React.FC<AppPropsType> = (store) => {

  const {mainLogoSite, mainBackgroundProfile, userPosts, messageInTextAreaPost} = store.state.profilePage
  const {dialogsData, messagesData, messageInTextAreaDialogs} = store.state.dialogsPage

  return (
      <div className="app-wrapper">
        <div className="container">
          <Header mainLogo={mainLogoSite}/>
          <NavBar navbar={store.state.navbar}/>
          <div className="container__content">
            <Route path="/dialogs/" render={() =>
              <Dialogs dialogsData={dialogsData}
                       messagesData={messagesData}
                       dispatch={store.dispatch.bind(store)}
                       messageInTextAreaDialogs={messageInTextAreaDialogs}
            />} />
            <Route path="/profile/" render={() =>
              <Profile mainBackgroundProfile={mainBackgroundProfile}
                       posts={userPosts}
                       dispatch={store.dispatch.bind(store)}
                       messageInTextAreaPost={messageInTextAreaPost}/>}/>
            <Route path="/music" component={Music}/>
            <Route path="/news" component={News}/>
            <Route path="/settings" component={Settings}/>
          </div>
        </div>
      </div>
  );
}

export default App;
