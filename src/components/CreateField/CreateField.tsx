import { RenderFieldPropsType } from 'components/FormControl/FormControl';
import React, {ComponentType} from 'react';
import {Field} from "redux-form";
import {Validator} from "redux-form/lib/Field";

export const createField = (
  name: string,
  placeholder: string,
  type: string,
  element: string,
  component?: ComponentType<RenderFieldPropsType> | string,
  validate?: Validator | Validator[] | undefined,
  text: string = '',
  other: Record<string, any> = {}
) => {
  return (
    <div>
      <Field name={name}
             placeholder={placeholder}
             type={type}
             element={element}
             component={component as ComponentType<RenderFieldPropsType> | string}
             validate={validate}
             {...other}
      /> {text}
    </div>
  )
};

export default createField;
