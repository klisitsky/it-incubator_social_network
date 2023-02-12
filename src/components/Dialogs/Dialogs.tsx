import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



const Dialog = (props: any) => {
  const path = '/dialogs/' + props.id
  return <NavLink to={path} className={s.dialog}>{props.name}</NavLink>
}

const Message = (props: any) => {
  return <div className={s.message}>{props.text}</div>
}

const Dialogs = () => {
  return (
    <div className={s.messagesPage}>
      <div className={s.dialogs}>
        <Dialog className={s.dialog} name='Артём' id='1'/>
        <Dialog className={s.dialog} name='Света' id='2'/>
        <Dialog className={s.dialog} name='Марина' id='3'/>
        <Dialog className={s.dialog} name='Катя' id='4'/>
        <Dialog className={s.dialog} name='Паша' id='5'/>
      </div>
      <div className={s.messages}>
        <Message className={s.message} text='Хэй, чувак'/>
        <Message className={s.message} text='Как ты там?'/>
        <Message className={s.message} text='Давно не виделись'/>
      </div>
    </div>
  )
}

export default Dialogs
