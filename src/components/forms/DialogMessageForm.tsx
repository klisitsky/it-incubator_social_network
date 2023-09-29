import React from 'react';
import s from "../Dialogs/Dialogs.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type DialogMessageFormDataType = {
  dialogMessage: string
}

const DialogMessageForm: React.FC<InjectedFormProps<DialogMessageFormDataType>> = (props) => {

  return (
    <form className={s.messageTextBody} onSubmit={props.handleSubmit}>
      <Field name='dialogMessage' placeholder='add new message...' type='text' component={'textarea'}/>
      <button style={{width: '40px', height: '20px'}} >send</button>
    </form>
  );
};

export default reduxForm<DialogMessageFormDataType>({
  form: 'dialogMessage'
})(DialogMessageForm);