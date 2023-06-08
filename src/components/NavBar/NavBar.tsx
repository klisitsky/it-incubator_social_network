import React from "react";
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

export type NavBarPropsType = {
  navItems: Array<NavBarType>
}

export type NavBarType = {
  id: string
  name: string
  pageUrl: string
}

const NavBar: React.FC<NavBarPropsType> = (props) => {

  const renderedNavBar = props.navItems.map(navItem => {
    return <li key={navItem.id} className={classes.item}>
      <NavLink to={navItem.pageUrl} activeClassName={classes.active}>{navItem.name}</NavLink>
    </li>
  })

  return <nav className={classes.nav}>
    <ul className={classes.listList}>
      {renderedNavBar}
    </ul>
  </nav>
}


export default NavBar