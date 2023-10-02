import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
  mainLogoSite: string
  isAuth: boolean
  userEmail: string | null
  logoutAPI: () => void
}

const Header: React.FC<HeaderPropsType> = (props) => {

  const onClickHandler = () => {
    props.logoutAPI()
  }

  return <header className={classes.header}>
    <div className={classes.logo}>
      <img className={classes.icon} src={props.mainLogoSite} alt="logo"/>
    </div>
    <div> {props.isAuth
      ? <div>
        <span>{props.userEmail}</span>
        <button onClick={onClickHandler}>Log out</button>
      </div>
      : <button><NavLink to={'/login'}>log In</NavLink></button>
    }
    </div>
  </header>
}

export default Header