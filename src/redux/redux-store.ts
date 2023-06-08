import {combineReducers, createStore} from "redux";
import reducerProfile, {ProfileActionsTypes} from "./reducerProfile";
import reducerDialogs, {DialogsActionsTypes} from "./reducerDialogs";
import reducerNavbar from "./reducerNavbar";


export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes

const reducers = combineReducers({
  profilePage: reducerProfile,
  dialogsPage: reducerDialogs,
  navbar: reducerNavbar
})

let store = createStore(reducers)

export type AppStoreType = typeof store

export default store