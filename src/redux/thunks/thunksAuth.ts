import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {AuthStatusChanging, setAuthUserData} from "../actions/actionsAuth";

export const logIn = () => (dispatch: Dispatch) => {
  authAPI.login()
    .then(data => {
      let {id, email, login} = data.data
      dispatch(setAuthUserData(id, email, login))
      dispatch(AuthStatusChanging())
    })
}