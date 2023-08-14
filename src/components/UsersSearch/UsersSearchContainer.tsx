import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
  changeFollowedStatus, setNewCurrentPage, setTotalUsersCount, setUsers, toggleFetching, UserType
} from "../../redux/reducerUsersSearch";
import UsersSearch from "./UsersSearch";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";


type UsersSearchContainerPropsType = StatePropsType & DispatchPropsType

class UsersSearchContainer extends React.Component<UsersSearchContainerPropsType> {

  componentDidMount() {
    this.props.toggleFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.countOfUsersOnPage).then(items => {
      this.props.setUsers(items)
      this.props.setTotalUsersCount(100)
      this.props.toggleFetching(false)
    })
  }

  onChangeCurrentPageClickHandler = (newPage:number) => {
    this.props.toggleFetching(true)
    this.props.setNewCurrentPage(newPage)
    usersAPI.getUsersNewPage(this.props.currentPage, this.props.countOfUsersOnPage).then(items => {
      this.props.setUsers(items)
      this.props.toggleFetching(false)
    })
  }

  render() {

    return <>
      {this.props.isFetching
        ? <Preloader/>
        : <UsersSearch users={this.props.users}
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        countOfUsersOnPage={this.props.countOfUsersOnPage}
        changeFollowedStatus={this.props.changeFollowedStatus}
        onChangeCurrentPageClickHandler={this.onChangeCurrentPageClickHandler}/>}
    </>

  }
}


export type StatePropsType = {
  users: Array<UserType>
  currentPage: number
  totalUsersCount: number
  countOfUsersOnPage: number
  isFetching: boolean
}

export type DispatchPropsType = {
  changeFollowedStatus: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setTotalUsersCount: (TotalUsersCount: number) => void
  setNewCurrentPage: (newCurrentPage: number) => void
  toggleFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: RootStateType):StatePropsType => {
  return {
    users: state.usersSearchPage.users,
    currentPage: state.usersSearchPage.currentPage,
    totalUsersCount: state.usersSearchPage.totalUsersCount,
    countOfUsersOnPage: state.usersSearchPage.countOfUsersOnPage,
    isFetching: state.usersSearchPage.isFetching
  }
}


export default React.memo(connect(mapStateToProps, {
  changeFollowedStatus,
  setUsers,
  setTotalUsersCount,
  setNewCurrentPage,
  toggleFetching
}as DispatchPropsType)(UsersSearchContainer));