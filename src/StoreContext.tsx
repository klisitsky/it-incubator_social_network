import React, {ReactNode} from "react";
import {AppStoreType} from "./redux/redux-store";

const StoreContext = React.createContext({} as AppStoreType)

type ProviderPropsType = {
  store: AppStoreType
  children: ReactNode
}

export const Provider = (props:ProviderPropsType) => {
  return <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
}

export default StoreContext