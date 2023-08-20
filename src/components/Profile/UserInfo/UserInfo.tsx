import s from "./UserInfo.module.css";
import React from "react";
import {UserInfoType} from "../../../redux/reducers/reducerProfile";

type UserInfoPropsType = {
  userInfo: UserInfoType
  setUserInfo: (data: UserInfoType) => void
}

export const UserInfo = (props: UserInfoPropsType) => {

  const {aboutMe, fullName, contacts, lookingForAJob, photos} = props.userInfo

  return (<div className={s.ProfileInfoBoby}>
      <div className={s.small}>
        <img src={photos.large} alt="avatar"/>
      </div>
      <div className={s.name}>{fullName}</div>
      <div className={s.aboutMe}>Статус: {aboutMe}</div>
      <div className={s.lookingForAJob}>Занятость: {lookingForAJob ? 'В поиске работы' : 'Уже батрачу'}</div>
      <div className={s.contacts}> Меня можно найти здесь:
        <a href={contacts.github} className={s.github}>{contacts.github}</a>
        <a href={contacts.vk} className={s.vk}>{contacts.vk}</a>
        <a href={contacts.facebook} className={s.facebook}>{contacts.facebook}</a>
        <a href={contacts.instagram} className={s.instagram}>{contacts.instagram}</a>
        <a href={contacts.twitter} className={s.twitter}>{contacts.twitter}</a>
        <a href={contacts.website} className={s.website}>{contacts.website}</a>
        <a href={contacts.youtube} className={s.youtube}>{contacts.youtube}</a>
        <a href={contacts.mainLink} className={s.mainLink}>{contacts.mainLink}</a>

      </div>
    </div>)
}