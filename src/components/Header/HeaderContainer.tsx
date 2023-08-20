import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {AuthStatusChanging, setAuthUserData} from "../../redux/actions/actionsAuth";
import {autorization} from "../../redux/thunks/thunksAuth";


type HeaderComponentPropsType = StatePropsType & DispatchPropsType

class HeaderAPI extends React.Component<HeaderComponentPropsType> {

  componentDidMount() {
    this.props.autorization()
  }

  render() {
    return <Header {...this.props}/>
  }
}

export type StatePropsType = {
  mainLogoSite: string
  isAuth: boolean
  userEmail: string | null
}

const mapStateToProps = (state: RootStateType):StatePropsType => {
  return {
    mainLogoSite: state.header.mainLogoSite,
    isAuth: state.auth.isAuth,
    userEmail: state.auth.data.email
  }
}

export type DispatchPropsType = {
  setAuthUserData: (id: number, email: string, login: string) => void
  AuthStatusChanging: () => void
  autorization: any
}

const HeaderContainer = connect(mapStateToProps, {setAuthUserData, AuthStatusChanging, autorization} as DispatchPropsType)(HeaderAPI)

export default React.memo(HeaderContainer)