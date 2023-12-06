import {autorizationAPI} from "./thunksAuth";
import {authorize} from "../actions/actionsApp";

export const initializeApp = () => (dispatch: any) => {
  dispatch(autorizationAPI()).then( (d:any) => {
    console.log(d)
    dispatch(authorize())
  })
}