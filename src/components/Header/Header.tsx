import React from "react";
import classes from './Header.module.css'


type HeaderPropsType = {
  mainLogoSite: string
}

const Header: React.FC<HeaderPropsType> = (props) => {

  return <header className={classes.header}>
    <div className={classes.logo}>
      <img className={classes.icon} src={props.mainLogoSite} alt="logo"/>
    </div>
  </header>
}

export default Header