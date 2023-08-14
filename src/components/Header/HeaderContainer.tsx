import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {AuthStatusChanging, setAuthUserData} from "../../redux/reducerAuth";
import {authAPI} from "../../api/api";


type HeaderComponentPropsType = StatePropsType & DispatchPropsType

class HeaderAPI extends React.Component<HeaderComponentPropsType> {

  componentDidMount() {
    authAPI.login()
        .then(data => {
          let {id, email, login} = data.data
          this.props.setAuthUserData(id, email, login)
          this.props.AuthStatusChanging()
        })
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
}

const HeaderContainer = connect(mapStateToProps, {setAuthUserData, AuthStatusChanging} as DispatchPropsType)(HeaderAPI)

export default React.memo(HeaderContainer)