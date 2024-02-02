import s from "./UserInfo.module.css";
import React, {ChangeEvent} from "react";
import {UserInfoType} from "redux/reducers/reducerProfile";
import {UserStatus} from "./UserStatus/UserStatus";

type UserInfoPropsType = {
  isOwner: boolean
  userInfo: UserInfoType
  setUserInfo: (data: UserInfoType) => void
  userStatus: string
  updateUserStatusAPI: () => void
  savePhoto: (newPhoto: any) => void
}

export const UserInfo = (props: UserInfoPropsType) => {

  const {fullName, contacts, lookingForAJob, photos} = props.userInfo


  const savePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (<div className={s.ProfileInfoBoby}>
      <div className={s.small}>
        <img src={photos.large} alt="avatar"/>
        {props.isOwner || <div className={s.customFileUploadContainer}>
          <label htmlFor="fileInput" className={s.customFileUpload}>
            New Photo
          </label>
          <input className={s.inputFileUpload} type="file" id="fileInput" onChange={savePhotoHandler}/>
        </div>}
      </div>
      <div className={s.name}>{fullName}</div>

      <UserStatus userStatus={props.userStatus} updateUserStatusAPI={props.updateUserStatusAPI}/>

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