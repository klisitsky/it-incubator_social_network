import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {setUserInfo, setUserStatus, toggleFetching} from "../actions/actionsProfile";

export const getUserInfoAPI = (userId: string) => (dispatch: Dispatch) => {
  dispatch(toggleFetching(true))
  profileAPI.getUserInfo(userId).then(data => {
    dispatch(setUserInfo(data))
    dispatch(toggleFetching(false))
  })
}

export const getUserStatusAPI = (userId: string) => (dispatch: Dispatch) => {
  profileAPI.getUserStatus(userId).then(data => {
    dispatch(setUserStatus(data))
  })
}

export const updateUserStatusAPI = (status: string) => (dispatch: Dispatch) => {
  profileAPI.updateUserStatus(status).then(data => {
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  })
}

