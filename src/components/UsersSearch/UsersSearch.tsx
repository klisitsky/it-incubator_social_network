import React from 'react';
import {UserType} from "../../redux/reducers/reducerUsersSearch";
import s from './UsersSearch.module.css'
import defaultPhoto from '../../img/istockphoto-846183030-612x612.jpg'
import {NavLink} from "react-router-dom";

type UsersSearchPropsType = {
  users: Array<UserType>
  currentPage: number
  totalUsersCount: number
  countOfUsersOnPage: number
  onChangeCurrentPage: (newPage: number) => void
  followingsInProgress: Array<number>
  acceptFollowingAPI: (userId: number, isFollow: boolean) => void
}

export const UsersSearch: React.FC<UsersSearchPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.countOfUsersOnPage)
    const pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
      pagesArray.push(i)
    }


    return (<>
      <h1>Users</h1>
      <div className={s.pagination}>
        {pagesArray.map((p, i) => {
          return <span key={i}
                       className={`${s.page} ${props.currentPage === p ? s.selectedPage : ''}`}
                       onClick={() => {props.onChangeCurrentPage(p)}}>{p} </span>
        })}
      </div>
      <div className="usersBody">
        {props.users.map(u => {
          return <div className="userItem"
                      key={u.id}>
            <div className={s.userAvatar}>
              <NavLink to={`profile/${u.id}`}>
                <img src={u.photos.small ? u.photos.small : defaultPhoto}
                     alt="avatar"/>
              </NavLink>
              <button disabled={props.followingsInProgress.some(userId => userId === u.id)}
                      onClick={() => props.acceptFollowingAPI(u.id, u.followed)}>
                {u.followed ? 'Unfollow' : 'Follow'}
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