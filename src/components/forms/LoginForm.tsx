import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import s from "./LoginForm.module.css"
import {required} from "validators/validators";
import {FormControl} from "components/FormControl/FormControl";
import createField from "components/CreateField/CreateField";
import {Captcha} from 'components/Captcha/Captcha';

export type LoginFormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormProps = InjectedFormProps<LoginFormDataType> & {
  captchaUrl?: string | null;
};

const LoginForm: React.FC<LoginFormProps> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField('email','email', 'text', 'input', FormControl, [required])}
      {createField('password','password', 'password', 'input', FormControl, [required])}
      {createField('rememberMe','rememberMe', 'checkbox', 'input', FormControl, undefined, 'remember Me')}
      {!props.captchaUrl || <Captcha captchaUrl={props.captchaUrl}/>}
      {props.error && <div className={s.summaryErrorForm}>{props.error}</div>}
      <button>Log in</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormDataType>({
  form: 'login'
})(LoginForm);

export default LoginReduxForm


