import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerProfile from "./reducers/reducerProfile";
import reducerDialogs from "./reducers/reducerDialogs";
import reducerNavbar from "./reducers/reducerNavbar";
import ReducerUsersSearch from "./reducers/reducerUsersSearch";
import reducerHeader from "./reducers/reducerHeader";
import ReducerAuth from "./reducers/reducerAuth";
import thunkMiddleware from "redux-thunk"



const reducers = combineReducers({
  header: reducerHeader,
  profilePage: reducerProfile,
  dialogsPage: reducerDialogs,
  navbar: reducerNavbar,
  usersSearchPage: ReducerUsersSearch,
  auth: ReducerAuth
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type RootStateType = ReturnType<typeof store.getState>

export default store