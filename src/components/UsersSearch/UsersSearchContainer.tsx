import React from 'react';
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, UserType} from "../../redux/reducerUsersSearch";
import UsersSearchC from "./UsersSearchC";



export type StatePropsType = {
  users: Array<UserType>
}

const mapStateToProps = (state: RootStateType):StatePropsType => {
  return {
    users: state.usersSearchPage
  }
}

type DispatchPropsType = {
  changeFollowedStatus: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
}

const mapDispatchToProps = (dispatch: DispatchType):DispatchPropsType => {
  return {
    changeFollowedStatus(userId: number) {
      const action = followAC(userId)
      dispatch(action)
    },
    setUsers(users: Array<UserType>) {
      const action = setUsersAC(users)
      dispatch(action)
    }
  }
}

const UsersSearchContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSearchC)

export default React.memo(UsersSearchContainer);