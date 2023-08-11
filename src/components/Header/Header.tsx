import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
  mainLogoSite: string
  isAuth: boolean
  userEmail: string | null
}

const Header: React.FC<HeaderPropsType> = (props) => {

  return <header className={classes.header}>
    <div className={classes.logo}>
      <img className={classes.icon} src={props.mainLogoSite} alt="logo"/>
    </div>
    <div> {props.isAuth
        ? <span>{props.userEmail}</span>
        : <NavLink to={'/login'}>login</NavLink>
    }
    </div>
  </header>
}

export default Header