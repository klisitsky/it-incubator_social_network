import {combineReducers, createStore} from "redux";
import reducerProfile, {ProfileActionsTypes} from "./reducerProfile";
import reducerDialogs, {DialogsActionsTypes} from "./reducerDialogs";
import reducerNavbar from "./reducerNavbar";
import ReducerUsersSearch, {UsersSearchActionsTypes} from "./reducerUsersSearch";
import reducerHeader from "./reducerHeader";
import ReducerAuth from "./reducerAuth";


export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes | UsersSearchActionsTypes



const reducers = combineReducers({
  header: reducerHeader,
  profilePage: reducerProfile,
  dialogsPage: reducerDialogs,
  navbar: reducerNavbar,
  usersSearchPage: ReducerUsersSearch,
  auth: ReducerAuth
})

let store = createStore(reducers)

export type DispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>

export default store