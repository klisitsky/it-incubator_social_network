import React from 'react';
import {UserType} from "redux/reducers/reducerUsersSearch";
import UserOnTheSearchPage from './UserOnTheSearchPage/UserOnTheSearchPage';
import Paginator from './Paginator/Paginator';

type UsersSearchPropsType = {
  users: Array<UserType>
  currentPage: number
  totalUsersCount: number
  pageSize: number
  onChangeCurrentPage: (newPage: number) => void
  followingsInProgress: Array<number>
  acceptFollowingAPI: (userId: number, isFollow: boolean) => void
}

const UsersSearch: React.FC<UsersSearchPropsType> = (props) => {


  return (<>
    <h1>Users</h1>
    <Paginator totalItemsCount={props.totalUsersCount}
               pageSize={props.pageSize}
               currentPage={props.currentPage}
               onChangeCurrentPage={props.onChangeCurrentPage}
               portionSize={10} />
    <div className="usersBody">
      {props.users.map(u => {
        return <UserOnTheSearchPage key={u.id}
                                    user={u}
                                    followingsInProgress={props.followingsInProgress}
                                    acceptFollowingAPI={props.acceptFollowingAPI}/>
      })}
    </div>
  </>)
}

export default UsersSearch;