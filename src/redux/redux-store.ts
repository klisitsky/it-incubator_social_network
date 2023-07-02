import {combineReducers, createStore} from "redux";
import reducerProfile, {ProfileActionsTypes} from "./reducerProfile";
import reducerDialogs, {DialogsActionsTypes} from "./reducerDialogs";
import reducerNavbar from "./reducerNavbar";
import UsersSearchReducer, {UsersSearchActionsTypes} from "./UsersSearchReducer";


export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes | UsersSearchActionsTypes



const reducers = combineReducers({
  profilePage: reducerProfile,
  dialogsPage: reducerDialogs,
  navbar: reducerNavbar,
  usersSearchPage: UsersSearchReducer
})

let store = createStore(reducers)

export type DispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>

export default store