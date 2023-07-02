import React from 'react';
import {connect} from "react-redux";
import {DispatchType, RootStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, UserType} from "../../redux/UsersSearchReducer";
import UsersSearch from "./UsersSearch";



export type StatePropsType = {
  usersSearchPage: Array<UserType>
}

const mapStateToProps = (state: RootStateType):StatePropsType => {
  return {
    usersSearchPage: state.usersSearchPage
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

const UsersSearchContainer = connect(mapStateToProps,mapDispatchToProps)(UsersSearch)

export default React.memo(UsersSearchContainer);