import React from 'react';
import {Redirect} from "react-router-dom";

export const RedirectLogin = () => {
  return (
        <Redirect to="/login"></Redirect>
  );
};

export default RedirectLogin;