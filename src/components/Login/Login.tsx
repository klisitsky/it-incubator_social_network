import React, {ComponentType} from 'react';
import {connect, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Redirect, useHistory} from 'react-router-dom'
import LoginForm, {LoginFormDataType} from "../forms/LoginForm";
import {compose} from "redux";
import {loginAPI} from "../../redux/thunks/thunksAuth";

type LoginPropsType = {
  loginAPI: (email: string, password: string, rememberMe: boolean) => void
}

const Login: React.FC<LoginPropsType> = (props) => {
  const isAuth = useSelector<RootStateType, boolean>(state=> state.auth.isAuth)

  if (isAuth) {
      return <Redirect to={'/profile'}/>
  }

  const onSubmitHandler = (formData:LoginFormDataType) => {
    props.loginAPI(formData.email, formData.password, formData.rememberMe)
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={onSubmitHandler}></LoginForm>
    </div>
  );
};


type DispatchPropsType = {
  loginAPI: any
}


export default compose<ComponentType>(
  React.memo,
  connect(null, {loginAPI} as DispatchPropsType),
)(Login)

