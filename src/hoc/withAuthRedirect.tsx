import React, {ComponentType} from 'react'
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


export type StatePropsType = {
  isAuth: boolean
}

const mapStateToProps = (state: RootStateType): StatePropsType => ({
  isAuth: state.auth.isAuth
})


function WithAuthRedirect<T>(Component: ComponentType<T>) {

  const RedirectComponent = (props: StatePropsType) => {
    const {isAuth, ...restProps} = props

    if (!isAuth) return <Redirect to="/login"/>

    return <Component {...restProps as T}/>
  }

  return connect(mapStateToProps)(RedirectComponent)
}

export default WithAuthRedirect