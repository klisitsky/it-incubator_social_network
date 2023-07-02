import React from "react";
import NavBar, {NavBarType} from "./NavBar";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";


export type StatePropsType = {
  navItems: Array<NavBarType>
}

const mapStateToProps = (state: RootStateType):StatePropsType => {
  return {
    navItems: state.navbar,
  }
}

const NavBarContainer = connect(mapStateToProps)(NavBar)


export default React.memo(NavBarContainer)