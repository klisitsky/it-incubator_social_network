import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {AuthStatusChanging, setAuthUserData} from "../actions/actionsAuth";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

export const autorizationAPI = () => (dispatch: Dispatch) => {
  return authAPI.me()
    .then(data => {
      if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login))
        dispatch(AuthStatusChanging(true))
      }
    })
}



export const loginAPI = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<any, any, any>) => {
  authAPI.login(email, password, rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(autorizationAPI())
      } else {
        const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit("login", {_error: message}))
      }
    })
}

export const logoutAPI = () => (dispatch: Dispatch) => {
  authAPI.logout()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(AuthStatusChanging(true))
      }
    })
}