import React from 'react';
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {Redirect} from 'react-router-dom'
import LoginForm, {FormDataType} from "./LoginForm";

const Login = () => {
  const isAuth = useSelector<RootStateType, boolean>(state=> state.auth.isAuth)

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  const onSubmitHandler = (formData:FormDataType) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={onSubmitHandler}></LoginForm>
    </div>
  );
};



export default Login;