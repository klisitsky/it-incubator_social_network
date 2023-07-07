import React from 'react';
import {UserType} from "../../redux/reducerUsersSearch";
import axios from "axios";

type UsersSearchPropsType = {
  users: Array<UserType>
  changeFollowedStatus: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
}

const UsersSearch = (props:UsersSearchPropsType) => {
  console.log(props.users)
  debugger
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })
  }

  return (<>
    <h1>Users</h1>
    <div className="usersBody">
      {props.users.map(u => {
        return <div className="userItem" key={u.id}>
          <div className="userAvatar">
            <img src={u.photoURL} alt="avatar"/>
            <button onClick={() => props.changeFollowedStatus(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
          </div>
          <div className="userInfo">
            <div className="userGeneral">
              <span className="userName">{u.name}</span>
              <span className="userStatus">{u.status}</span>
            </div>
            <div className="userLocation">
              <span className="userCountry">{u.location.country},</span>
              <span className="userCity">{u.location.city}</span>
            </div>
          </div>
        </div>
      })}
    </div>
    </>);
};

export default UsersSearch;