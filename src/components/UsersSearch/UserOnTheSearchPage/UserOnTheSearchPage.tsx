import React from 'react';
import s from 'components/UsersSearch/UsersSearch.module.css'
import defaultPhoto from 'img/istockphoto-846183030-612x612.jpg'
import {NavLink} from "react-router-dom";
import {UserType} from "redux/reducers/reducerUsersSearch";


type UserOnTheSearchPagePropsType = {
  user: UserType
  followingsInProgress: Array<number>
  acceptFollowingAPI: (userId: number, isFollow: boolean) => void
}

const UserOnTheSearchPage: React.FC<UserOnTheSearchPagePropsType> = ({user, followingsInProgress, acceptFollowingAPI}) => {

  return <div className="userItem"
              key={user.id}>
    <div className={s.userAvatar}>
      <NavLink to={`profile/${user.id}`}>
        <img src={user.photos.small ? user.photos.small : defaultPhoto}
             alt="avatar"/>
      </NavLink>
      <button disabled={followingsInProgress.some(userId => userId === user.id)}
              onClick={() => {acceptFollowingAPI(user.id, !user.followed)}}>
        {user.followed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
    <div className="userInfo">
      <span className="userName">{user.name}</span>
      <span className="userName">{user.uniqueUrlName}</span>
      <span className="userStatus">{user.status}</span>
    </div>
  </div>
}

export default UserOnTheSearchPage;