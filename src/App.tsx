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
import {connect} from "react-redux";
import {RootStateType} from "./redux/redux-store";
import Preloader from "./components/Preloader/Preloader";
import {initializeApp} from "./redux/thunks/thunksApp";


type AppPropsType = DispatchPropsType & StatePropsType

export class App extends React.Component<AppPropsType> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.authorized) {
      return <Preloader/>
    }

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
}

export type DispatchPropsType = {
  initializeApp: any
}

export type StatePropsType = {
  authorized: boolean
}

export const mapStateToProps = (state: RootStateType): StatePropsType => ({
  authorized: state.app.authorized
})

export default connect(mapStateToProps, {initializeApp} as DispatchPropsType)(App);
