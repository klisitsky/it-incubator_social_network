import React from "react";
import {WrappedFieldProps} from "redux-form";



export type RenderFieldPropsType = WrappedFieldProps & {
  placeholder: string
  type: string
  element: string
}
export const FormControl: React.FC<RenderFieldPropsType> = ({
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