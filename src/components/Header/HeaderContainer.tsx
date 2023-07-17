import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

export type StatePropsType = {
  mainLogoSite: string
}

const mapStateToProps = (state: RootStateType):StatePropsType => {
  return {
    mainLogoSite: state.header.mainLogoSite,
  }
}

const HeaderContainer = connect(mapStateToProps)(Header)

export default React.memo(HeaderContainer)