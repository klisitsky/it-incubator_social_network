import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "redux/redux-store";
import UsersSearch from "./UsersSearch";
import Preloader from "../Preloader/Preloader";
import {UserType} from "redux/reducers/reducerUsersSearch";
import {
  changeFollowedStatus, changeFollowingInProgress,
  setNewCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFetching
} from "redux/actions/actionsUserSearch";
import {acceptFollowing, fetchUsers} from "redux/thunks/thunksUserSearch";


type UsersSearchContainerPropsType = StatePropsType & DispatchPropsType

class UsersSearchContainer extends React.Component<UsersSearchContainerPropsType> {

  componentDidMount() {
    this.props.fetchUsers(this.props.currentPage, this.props.pageSize)
  }

  onChangeCurrentPage = (newPage: number) => {
    this.props.fetchUsers(newPage, this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFetching
        ? <Preloader/>
        : <UsersSearch users={this.props.users}
                       currentPage={this.props.currentPage}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onChangeCurrentPage={this.onChangeCurrentPage}
                       followingsInProgress={this.props.followingsInProgress}
                       acceptFollowingAPI={this.props.acceptFollowing}/>}
    </>
  }
}


export type StatePropsType = {
  users: Array<UserType>
  currentPage: number
  totalUsersCount: number
  pageSize: number
  isFetching: boolean
  followingsInProgress: Array<number>
}

export type DispatchPropsType = {
  changeFollowedStatus: (userId: number, isFollow: boolean) => void
  setUsers: (users: Array<UserType>) => void
  setTotalUsersCount: (TotalUsersCount: number) => void
  setNewCurrentPage: (newCurrentPage: number) => void
  toggleFetching: (isFetching: boolean) => void
  changeFollowingInProgress: (isContained: boolean, userId: number) => void
  fetchUsers: any // (currentPage:number, countOfUsersOnPage:number) => (dispatch:Dispatch) => void
  acceptFollowing: any
}

const mapStateToProps = (state: RootStateType): StatePropsType => {
  return {
    users: state.usersSearchPage.users,
    currentPage: state.usersSearchPage.currentPage,
    totalUsersCount: state.usersSearchPage.totalUsersCount,
    pageSize: state.usersSearchPage.pageSize,
    isFetching: state.usersSearchPage.isFetching,
    followingsInProgress: state.usersSearchPage.followingsInProgress
  }
}


export default React.memo(connect(mapStateToProps, {
  changeFollowedStatus,
  setUsers,
  setTotalUsersCount,
  setNewCurrentPage,
  toggleFetching,
  changeFollowingInProgress,
  fetchUsers,
  acceptFollowing
} as DispatchPropsType)(UsersSearchContainer));