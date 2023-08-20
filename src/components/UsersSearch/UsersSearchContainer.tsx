import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import UsersSearch from "./UsersSearch";
import Preloader from "../Preloader/Preloader";
import {UserType} from "../../redux/reducers/reducerUsersSearch";
import {
  changeFollowedStatus, changeFollowingInProgress,
  setNewCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFetching
} from "../../redux/actions/actionsUserSearch";
import {acceptFollowingAPI, getUsersAPI} from "../../redux/thunks/thunksUserSearch";


type UsersSearchContainerPropsType = StatePropsType & DispatchPropsType

class UsersSearchContainer extends React.Component<UsersSearchContainerPropsType> {

  componentDidMount() {
    this.props.getUsersAPI(this.props.currentPage, this.props.countOfUsersOnPage)
  }

  onChangeCurrentPage = (newPage:number) => {
    this.props.getUsersAPI(newPage, this.props.countOfUsersOnPage)
  }

  render() {
    return <>
      {this.props.isFetching
        ? <Preloader/>
        : <UsersSearch users={this.props.users}
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        countOfUsersOnPage={this.props.countOfUsersOnPage}
        onChangeCurrentPage={this.onChangeCurrentPage}
        followingsInProgress={this.props.followingsInProgress}
        acceptFollowingAPI={this.props.acceptFollowingAPI}/>}
    </>
  }
}


export type StatePropsType = {
  users: Array<UserType>
  currentPage: number
  totalUsersCount: number
  countOfUsersOnPage: number
  isFetching: boolean
  followingsInProgress: Array<number>
}

export type DispatchPropsType = {
  changeFollowedStatus: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setTotalUsersCount: (TotalUsersCount: number) => void
  setNewCurrentPage: (newCurrentPage: number) => void
  toggleFetching: (isFetching: boolean) => void
  changeFollowingInProgress: (isContained: boolean, userId: number) => void
  getUsersAPI: any // (currentPage:number, countOfUsersOnPage:number) => (dispatch:Dispatch) => void
  acceptFollowingAPI: any
}

const mapStateToProps = (state: RootStateType):StatePropsType => {
  return {
    users: state.usersSearchPage.users,
    currentPage: state.usersSearchPage.currentPage,
    totalUsersCount: state.usersSearchPage.totalUsersCount,
    countOfUsersOnPage: state.usersSearchPage.countOfUsersOnPage,
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
  getUsersAPI,
  acceptFollowingAPI
}as DispatchPropsType)(UsersSearchContainer));