import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "./LoginForm.module.css"
import {WrappedFieldProps} from 'redux-form';
import {required} from "validators/validators";

export type LoginFormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {


  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='email'
               placeholder='email'
               type='email'
               element={'input'}
               component={FormControl}
               validate={[required]}
        />
      </div>
      <div>
        <Field name='password'
               placeholder='password'
               type='password'
               element={'input'}
               component={FormControl}
               validate={[required]}
        />
      </div>
      <div>
        <Field id="rememberMe"
               name='rememberMe'
               type='checkbox'
               component={'input'}
        />
        <label htmlFor="rememberMe">remember Me</label>
      </div>
      {props.error && <div className={s.summaryErrorForm}>{props.error}</div>}
      <button>Log in</button>

    </form>);
};

type RenderFieldPropsType = WrappedFieldProps & {
  placeholder: string
  type: string
  element: string
}


const FormControl: React.FC<RenderFieldPropsType> = ({
                                                       input,
                                                       meta: {touched, error, warning},
                                                       placeholder,
                                                       type,
                                                       element
                                                     }) => {

  const Element = React.createElement(element, {...input, placeholder, type});

  return (<div>
    {Element}
    {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>)

}


export default reduxForm<LoginFormDataType>({
  form: 'login'
})(LoginForm);


