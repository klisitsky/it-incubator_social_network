import React from 'react';
import {UserType} from "../../redux/reducerUsersSearch";
import axios from "axios";

type UsersSearchPropsType = {
  users: Array<UserType>
  changeFollowedStatus: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
}

class UsersSearchC extends React.Component<UsersSearchPropsType> {
  constructor(props: UsersSearchPropsType) {
    super(props);

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {

    return (<>
      <h1>Users</h1>
      <div className="usersBody">
        {this.props.users.map(u => {
          return <div className="userItem" key={u.id}>
            <div className="userAvatar">
              <img src={u.photoURL} alt="avatar"/>
              <button
                onClick={() => this.props.changeFollowedStatus(u.id)}>{u.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <div className="userInfo">
              <div className="userGeneral">
                <span className="userName">{u.name}</span>
                <span className="userStatus">{u.status}</span>
              </div>
              <div className="userLocation">
                <span className="userCountry">{"u.location.country"},</span>
                <span className="userCity">{"u.location.city"}</span>
              </div>
            </div>
          </div>
        })}
      </div>
    </>);
  }
}

export default UsersSearchC;