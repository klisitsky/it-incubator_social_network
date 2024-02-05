import React, {ComponentType} from 'react';
import {connect, useSelector} from "react-redux";
import {RootStateType} from "redux/redux-store";
import {Redirect} from 'react-router-dom'
import LoginReduxForm, {LoginFormDataType} from "../forms/LoginForm";
import {compose} from "redux";
import {loginAPI} from "redux/thunks/thunksAuth";

type LoginPropsType = {
  loginAPI: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
  captchaUrl: string | null
}

const Login: React.FC<LoginPropsType> = (props) => {
  const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  const onSubmitHandler = (formData: LoginFormDataType) => {
    props.loginAPI(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  return (
    <div>
      <h1>LOGIN</h1>
      {/*@ts-ignore*/}
      <LoginReduxForm onSubmit={onSubmitHandler} captchaUrl={props.captchaUrl} />
    </div>
  );
};


type DispatchPropsType = {
  loginAPI: any
}

type StatePropsType = {
  captchaUrl: string | null
}
const mapStateToProps = (state: RootStateType): StatePropsType => ({
  captchaUrl: state.auth.captchaUrl
})

export default compose<ComponentType>(
  React.memo,
  connect(mapStateToProps, { loginAPI } as DispatchPropsType),
)(Login);

