import {Dispatch} from "redux";
import {authAPI} from "api/api";
import {authStatusChanging, getCaptchaUrlSuccess, setAuthUserData} from "../actions/actionsAuth";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";

export const autorizationAPI = () => (dispatch: Dispatch) => {
  return authAPI.me()
    .then(data => {
      if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login))
        dispatch(authStatusChanging(true))
      }
    })
}

export const loginAPI = (email: string, password: string, rememberMe: boolean, captcha: string = '') => (dispatch: ThunkDispatch<any, any, any>) => {
  authAPI.login(email, password, rememberMe, captcha)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(autorizationAPI())
      } else {
        if (data.resultCode === 10) {
          dispatch(getCaptchaUrl())
        }
        const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit("login", {_error: message}))
      }
    })
}

export const logoutAPI = () => (dispatch: ThunkDispatch<any, any, any>) => {
  authAPI.logout()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(autorizationAPI())
        dispatch(authStatusChanging(true))
      }
    })
}

export const getCaptchaUrl = () => (dispatch: ThunkDispatch<any, any, any>) => {
  authAPI.getCapthaUrl()
    .then(data => {
      dispatch(getCaptchaUrlSuccess(data.url))
    })
}
