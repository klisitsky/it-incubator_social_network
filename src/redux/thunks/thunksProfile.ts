import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {setUserInfo, toggleFetching} from "../actions/actionsProfile";

export const getUserInfoAPI = (userId: string) => (dispatch: Dispatch) => {
  dispatch(toggleFetching(true))
  profileAPI.getUserInfo(userId).then(data => {
    dispatch(setUserInfo(data))
    dispatch(toggleFetching(false))
  })
}