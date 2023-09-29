import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type PostMessageFormDataType = {
  messagePost: string
}

const PostMessageForm: React.FC<InjectedFormProps<PostMessageFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='postMessage' placeholder='add new post...' type='text' component={'textarea'}/>
      <button>Add</button>
    </form>
  );
};


export default reduxForm<PostMessageFormDataType>({
  form: 'postMessage'
})(PostMessageForm);