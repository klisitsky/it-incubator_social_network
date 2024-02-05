import React from 'react';
import {required} from "validators/validators";

import {FormControl} from "components/FormControl/FormControl";
import createField from "components/CreateField/CreateField";

type CaptchaPropsType = {
  captchaUrl: string
}

export const Captcha: React.FC<CaptchaPropsType> = ({captchaUrl}) => {
  return <>
    {createField('captcha','Enter captcha', 'text', 'input', FormControl, [required])}
    <div>
      <img src={captchaUrl} alt="captcha"/>
    </div>
  </>
}


