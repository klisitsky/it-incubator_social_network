import React from "react";
import NavBar from "./NavBar";
import StoreContext from "../../StoreContext";


const NavBarContainer = () => {

  return <StoreContext.Consumer>
    {(store) => <NavBar navItems={store.getState().navbar}/>}
  </StoreContext.Consumer>
}


export default NavBarContainer