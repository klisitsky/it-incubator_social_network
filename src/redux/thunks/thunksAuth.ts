import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {AuthStatusChanging, setAuthUserData} from "../actions/actionsAuth";

export const autorization = () => (dispatch: Dispatch) => {
  authAPI.login()
    .then(data => {
      if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login))
        dispatch(AuthStatusChanging())
      }
    })
}