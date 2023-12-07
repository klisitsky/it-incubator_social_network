import React, {lazy} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {RootStateType} from "redux/redux-store";
import Preloader from "./components/Preloader/Preloader";
import {initializeApp} from "redux/thunks/thunksApp";
import withSuspense from "hoc/withSuspense";


const lazyUsersSearchContainer = lazy(() => import("./components/UsersSearch/UsersSearchContainer"))
const lazyDialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"))

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
            <Route path="/dialogs/" component={withSuspense(lazyDialogsContainer)}/>
            <Route path="/profile/:userId?" component={ProfileContainer}/>
            <Route path="/music" component={Music}/>
            <Route path="/news" component={News}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/search" component={withSuspense(lazyUsersSearchContainer)}/>
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
