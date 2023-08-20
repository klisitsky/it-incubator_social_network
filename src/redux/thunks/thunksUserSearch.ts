import {Dispatch} from "redux";
import {
  changeFollowedStatus,
  changeFollowingInProgress,
  setNewCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFetching
} from "../actions/actionsUserSearch";
import {followAPI, usersAPI} from "../../api/api";

export const getUsersAPI = (currentPage:number, countOfUsersOnPage:number) => {
  return (dispatch:Dispatch) => {
    dispatch(toggleFetching(true))
    usersAPI.getUsers(currentPage, countOfUsersOnPage).then(items => {
      dispatch(setUsers(items))
      dispatch(setNewCurrentPage(currentPage))
      dispatch(setTotalUsersCount(100))
      dispatch(toggleFetching(false))
    })
  }
}


export const acceptFollowingAPI = (userId: number, isFollow: boolean) => {
  return (dispatch:Dispatch) => {
    const setFollowResult = (data:any) => {
      if (!data.resultCode) {
        dispatch(changeFollowedStatus(userId));
        dispatch(changeFollowingInProgress(false, userId));
      }
    };
    dispatch(changeFollowingInProgress(true, userId));

    if (!isFollow) {
      followAPI.follow(userId).then(data => setFollowResult(data));
    } else {
      followAPI.unfollow(userId).then(data => setFollowResult(data));
    }
  };
}