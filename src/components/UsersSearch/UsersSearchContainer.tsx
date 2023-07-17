import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
  changeFollowedStatus, setNewCurrentPage, setTotalUsersCount, setUsers, toggleFetching, UserType
} from "../../redux/reducerUsersSearch";
import axios from "axios";
import UsersSearch from "./UsersSearch";
import Preloader from "../Preloader/Preloader";


type UsersSearchContainerPropsType = StatePropsType & DispatchPropsType

class UsersSearchContainer extends React.Component<UsersSearchContainerPropsType> {

  componentDidMount() {
    this.props.toggleFetching(true)
    const URL_PATH = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countOfUsersOnPage}`
    axios.get(URL_PATH).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(100)
      this.props.toggleFetching(false)
    })
  }

  onChangeCurrentPageClickHandler = (newPage:number) => {
    this.props.toggleFetching(true)
    this.props.setNewCurrentPage(newPage)
    const URL_PATH = `https://social-network.samuraijs.com/api/1.0/users?page=${newPage}&count=${this.props.countOfUsersOnPage}`
    axios.get(URL_PATH).then(response => {
      this.props.setUsers(response.data.items)
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