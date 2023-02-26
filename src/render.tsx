import {addPost, changeMessageText, StateType} from "./state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const renderAll = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} changeMessageText={changeMessageText}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
