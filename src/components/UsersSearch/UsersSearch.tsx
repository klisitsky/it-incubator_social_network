import React from 'react';
import {UserType} from "../../redux/reducerUsersSearch";
import s from './UsersSearch.module.css'
import defaultPhoto from '../../img/istockphoto-846183030-612x612.jpg'
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

type UsersSearchPropsType = {
  users: Array<UserType>
  currentPage: number
  totalUsersCount: number
  countOfUsersOnPage: number
  changeFollowedStatus: (userId: number) => void
  onChangeCurrentPageClickHandler: (newPage: number) => void
}

export const UsersSearch: React.FC<UsersSearchPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.countOfUsersOnPage)
    const pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
      pagesArray.push(i)
    }

    const onFollowingClickHandler = (userId: number, isFollow: boolean) => {
        if (!isFollow) {
            followAPI.follow(userId).then(data => {
                if (!data.resultCode) props.changeFollowedStatus(userId)
            })
        } else {
            followAPI.unfollow(userId).then(data => {
                if (!data.resultCode) props.changeFollowedStatus(userId)
            })
        }
    }

    return (<>
      <h1>Users</h1>
      <div className={s.pagination}>
        {pagesArray.map((p, i) => {
          return <span key={i}
                       className={props.currentPage === p ? s.selectedPage : ''}
                       onClick={() => {props.onChangeCurrentPageClickHandler(p)}}>{p} </span>
        })}
      </div>
      <div className="usersBody">
        {props.users.map(u => {
          return <div className="userItem" key={u.id}>
            <div className={s.userAvatar}>
              <NavLink to={`profile/${u.id}`}>
                <img src={u.photos.small ? u.photos.small : defaultPhoto} alt="avatar"/>
              </NavLink>
              <button
                onClick={() => onFollowingClickHandler(u.id, u.followed)}>{u.followed ? 'Unfollow' : 'Follow'}
              </button>
            </div>
            <div className="userInfo">
                <span className="userName">{u.name}</span>
                <span className="userName">{u.uniqueUrlName}</span>
                <span className="userStatus">{u.status}</span>
            </div>
          </div>
        })}
      </div>
    </>);

}

export default UsersSearch;