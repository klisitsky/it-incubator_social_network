import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
  login: string
  password: string
  rememberMe: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='login' placeholder='login' type='text' component={'input'}/>
      </div>
      <div>
        <Field name='password' placeholder='password' type='text' component={'input'}/>
      </div>
      <div>
        <Field id="rememberMe" name='rememberMe' type='checkbox' component={'input'}></Field>
        <label htmlFor="rememberMe">remember Me</label>
      </div>
      <button>Log in</button>
    </form>);
};

export default reduxForm<FormDataType>({
  form: 'login'
})(LoginForm);