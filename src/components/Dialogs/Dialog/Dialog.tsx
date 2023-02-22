import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import React from "react";


export type DialogType = {
  id: number
  name: string
}

export const Dialog: React.FC<DialogType> = (props) => {
  const path: string = '/dialogs/' + props.id

  return <NavLink key={props.id} to={path} className={s.dialog}>{props.name}</NavLink>
}