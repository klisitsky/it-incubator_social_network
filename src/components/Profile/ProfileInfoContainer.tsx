import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import StoreContext from "../../StoreContext";


export const ProfileInfoContainer = () => {

  return (<StoreContext.Consumer>
    {
      (store) => {
        return <ProfileInfo bg={store.getState().profilePage.mainBackgroundProfile}/>
      }
    }
  </StoreContext.Consumer>)
}