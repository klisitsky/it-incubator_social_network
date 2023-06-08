import React from "react";
import StoreContext from "../../StoreContext";
import Header from "./Header";


const HeaderContainer = () => {

  return <StoreContext.Consumer>
    {(store) => <Header mainLogo={store.getState().profilePage.mainLogoSite}/>}
  </StoreContext.Consumer>
}

export default HeaderContainer