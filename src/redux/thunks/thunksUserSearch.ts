import {Dispatch} from "redux";
import {
  changeFollowedStatus,
  changeFollowingInProgress,
  setNewCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFetching
} from "../actions/actionsUserSearch";
import {followAPI, usersAPI} from "api/api";

export const fetchUsers = (currentPage:number, countOfUsersOnPage:number) => {
  return (dispatch:Dispatch) => {
    dispatch(toggleFetching(true))
    usersAPI.getUsers(currentPage, countOfUsersOnPage).then(data => {
      dispatch(setUsers(data.items))
      dispatch(setNewCurrentPage(currentPage))
      dispatch(setTotalUsersCount(data.totalCount))
      dispatch(toggleFetching(false))
    })
  }
}


export const acceptFollowing = (userId: number, isFollow: boolean) => {
  return (dispatch:Dispatch) => {


    const setFollowResult = (data:any) => {
      if (!data.resultCode) {
        dispatch(changeFollowedStatus(userId, isFollow));
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