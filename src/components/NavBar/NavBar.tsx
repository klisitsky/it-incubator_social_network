import React from "react";
import classes from './NavBar.module.css';

const NavBar = () => {
  return <nav className={classes.nav}>
    <ul className="app-wrapper__list">
      <li className={classes.item}>
        <a className={`${classes.link} ${classes.active}`} href="#">Profile</a>
      </li>
      <li className={classes.item}>
        <a className={classes.link} href="#">Messages</a>
      </li>
      <li className={classes.item}>
        <a className={classes.link} href="#">News</a>
      </li>
      <li className={classes.item}>
        <a className={classes.link} href="#">Music</a>
      </li>
      <li className={classes.item}>
        <a className={classes.link} href="#">Setting</a>
      </li>
    </ul>
  </nav>
}


export default NavBar