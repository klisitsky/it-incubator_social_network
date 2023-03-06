import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {StorePropsType, store} from "./state";


export const renderAll = (store: StorePropsType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} store={store}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderAll(store)
store.subscribe(() => renderAll(store))